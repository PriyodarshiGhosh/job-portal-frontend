import { useEffect, useState } from "react";
import useJobSearchView from "./views/useJobSearch";
import { useRouter } from "next/router";
import ReactModal from "react-modal";
import ApplyJob from "./ApplyJob";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axios";
import ApiRoutes from "@/config/apiRoutes";
import { toast } from "react-toastify";
export default function JobSearch() {
  const { mutateAsync } = useMutation(async (param:{resume:any,jobId:any,jwtToken:any}) => {
    try {
      const response = await axiosInstance.post(
        ApiRoutes.CANDIDATE,
        { resume:param.resume, jobId:param.jobId },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${param.jwtToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error('Error submitting job application');
    }
  });
  const handleJobApply = async (resume:any,jobId:any) => {
    const jwtToken = localStorage.getItem('token') || '';
    console.log(jwtToken);
    
    try {
      await mutateAsync({resume:'vvv',jobId:jobId,jwtToken});
      toast.success('Job application submitted successfully!');
    } catch (error:any) {
      
    }
    
  };
  const { handleSubmit,
    handleApply,
    handlePreviousPage,
    handleNextPage,role,setRole,jobData,setJobData,currentPage,setCurrentPage,router ,formatSalary,closeModal,selectedJobId,isModalOpen,setSelectedJobId,setIsModalOpen} = useJobSearchView();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-8">Search for a Job</h1>
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="role"
          >
            Job Role
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="role"
            type="text"
            placeholder="Enter the job role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      {jobData && jobData.data.length > 0 && (
        <div className="mt-8 grid grid-cols-2 gap-2">
          {jobData.data.map((job: any) => (
            <div
              key={job.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
              style={{height:'250px', width: '280px' ,marginRight: '20px'}}
            >
              <div>
                
                <p className="text-gray-800 font-bold"> {job.title}</p>
                <p className="text-gray-800 font-bold">Description:</p>
                <p className="text-gray-800 font-light">{job.description}</p>
                <p className="text-gray-800 font-bold">Location:</p>
                <p className="text-gray-800 font-light">{job.location}</p>
                <p className="text-gray-800 font-bold">Salary:</p>
                <p className="text-gray-800 font-light">{formatSalary(job.salary)}</p>
              </div>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleJobApply('vvv',job.id)}
              >
                Apply
              </button>
              
            </div>
          ))}
        </div>
      )}
          <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <ApplyJob jobId={selectedJobId} closeModal={closeModal} />
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
}