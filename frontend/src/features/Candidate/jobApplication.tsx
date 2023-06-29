import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios';
import ApiRoutes from '@/config/apiRoutes';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';


export default function JobApplication() {
  const [error, setError] = useState('');
  const [showApplications, setShowApplications] = useState(true); // State variable to track whether to show applications
const route=useRouter();
  const { data: jobApplications, isLoading, isError } = useQuery(
    ['jobApplications'],
    async () => {
      const jwtToken = localStorage.getItem('token') || '';

      try {
        const response = await axiosInstance.get(ApiRoutes.CANDIDATE + '/application', {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        console.log(response)
        const res= response.data.map((jobApplication: any) => ({
          jobId: jobApplication[0].description,
          resume: jobApplication[0].title,
        }))
        console.log(res)
        return res;
      } catch (error) {
        throw new Error('Failed to fetch job applications');
      }
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>No job applications found</div>;
  }

  const toggleApplications = () => {
    setShowApplications(!showApplications);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mt-8">Your Job Applications</h1>
      {showApplications && jobApplications.length>0?(
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {jobApplications.map((jobApplication: any) => (
            <div
              key={jobApplication.id}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <p className="text-gray-600">{jobApplication.resume}</p>
              <p className="text-gray-600 font-bold">Description</p>
              <p className="text-gray-600">{jobApplication.jobId}</p>
              
            </div>
          ))}
        </div>
      ):(
        <div>No job applications found.</div>
      )}
    </div>
  );
}
