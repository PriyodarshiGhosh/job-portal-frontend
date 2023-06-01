import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import ApiRoutes from '@/config/apiRoutes';
import jwt from 'jsonwebtoken';
import { axiosInstance } from '@/utils/axios';
import ReactModal from "react-modal";
import FetchApplication from './FetchApplication';
import useFetchApplicationView from "./views/useFetchApplication";
const JobsList = () => {
  const [error, setError] = useState('');
  const [recruiterId, setRecruiterId] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [jobData, setJobData] = useState<any>(null);
  const [isFetchingApplications, setIsFetchingApplications] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<number | "">("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
   const handleFetchApplications = (jobId: any) => {
     setSelectedJobId(jobId);
     setIsModalOpen(true);
   };
   const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJobId('');
  };
  const formatSalary = (salary:string) => {
    const numericValue = parseInt(salary, 10); // Parse the string salary to numeric value
    if (!isNaN(numericValue)) {
      if (numericValue >= 10000000) {
        return `${numericValue / 10000000} crore`;
      } else if (numericValue >= 100000) {
        return `${numericValue / 100000} lac`;
      } else {
        return `${numericValue} thousand`;
      }
    } else {
      return salary; // Return the original string if parsing fails
    }
  };
  const { data: jobApplications, isLoading, isError, refetch } = useQuery(
    ['jobApplications', recruiterId],
    async () => {
      const jwtToken = localStorage.getItem('token') || '';
      const decodedToken = jwt.decode(jwtToken) as Record<string, any>;
  
      try {
        const response = await axiosInstance.get(
          `${ApiRoutes.RECRUITER}?recruiterId=${decodedToken.id}&currentPage=${currentPage}`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );
        console.log(response.data)
        setJobData(response.data);
        return jobData;
      } catch (error) {
        setError('Failed to fetch job applications');
        throw new Error('Failed to fetch job applications');
      }
    }
  );
  const handlePreviousPage = async () => {
    if (currentPage > 1) {
        const jwtToken = localStorage.getItem('token') || '';
        const decodedToken = jwt.decode(jwtToken) as Record<string, any>;
      try {
        const previousPage = currentPage - 1;
        const response = await axiosInstance.get(
            `${ApiRoutes.RECRUITER}?recruiterId=${decodedToken.id}&currentPage=${previousPage}`,
            {
              headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
            }
          );
        setJobData(response.data);
        setCurrentPage(previousPage);
      } catch (error) {
        
      }
    }
  };
  const handleNextPage = async () => {
    if (currentPage < jobData.pagination.totalPages) {
        const jwtToken = localStorage.getItem('token') || '';
        const decodedToken = jwt.decode(jwtToken) as Record<string, any>;
      try {
        const nextPage = currentPage + 1;
        const response = await axiosInstance.get(
            `${ApiRoutes.RECRUITER}?recruiterId=${decodedToken.id}&currentPage=${nextPage}`,
            {
              headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
            }
          );
        setJobData(response.data);
        setCurrentPage(nextPage);
      } catch (error) {
        
      }
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    refetch();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mt-8">Your job Postings</h1>
      <form onSubmit={handleSubmit} className="mt-8">
        
      </form>
      {jobData && jobData.data.length > 0  ? (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {jobData.data.map((jobApplication: any) => (
            
            <div
              key={jobApplication.id}
              className="bg-white border-gray-200 shadow-md rounded-lg mb-4 p-4 justify-between"
              style={{height:'250px', width: '280px' ,marginRight: '20px',padding:'10px'}
            }
            >
              <div className="flex items-center justify-between" >
                <div
                style={{padding:'10px'}}>
                  <p className="text-gray-800 font-bold">{jobApplication.title}</p>
                  <p className="text-gray-800 font-bold">Description</p>
                  <p className="text-gray-800 font-light"> {jobApplication.description}</p>
                  <p className="text-gray-800 font-bold">Location</p>
                  <p className="text-gray-800 font-light"> {jobApplication.location}</p>
                  <p className="text-gray-800 font-bold">Salary</p>
                  <p className="text-gray-800 font-light"> {formatSalary(jobApplication.salary)}</p>
                </div>
              </div>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleFetchApplications(jobApplication.id)}
              >
                View Applications
              </button>
            </div>
           
          ))}
        </div>
      ) : (
        <div>No job applications found.</div>
      )}
      <ReactModal
  isOpen={String(selectedJobId)?.length>0}
  onRequestClose={closeModal}
  className="modal"
  overlayClassName="modal-overlay"
  style={{
    content: {
        position:'absolute',
      top: '50px',
      left: '373px',
      right: '350px',
      bottom: '400px',
      borderRadius: '8px',
      width: '694px',
      height: '731px',
      overflow: 'auto',
      opacity: 1
    },
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      zIndex: 1000,
    },
  }}
>
  <FetchApplication jobId={selectedJobId} closeModal={closeModal} />
</ReactModal>

      {jobData && jobData.pagination &&(
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            style={{ marginRight: '5px' ,width:'70px'}}
          >
            Back
          </button>
          <p className="text-gray-800 font-bold">Page {currentPage} of {jobData.pagination.totalPages}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleNextPage}
            disabled={currentPage === jobData.pagination.totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
  
};

export default JobsList;
