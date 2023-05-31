import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios';
import ApiRoutes from '@/config/apiRoutes';

export default function JobApplication() {
  const [error, setError] = useState('');
  const [selectedJob, setSelectedJob] = useState('');
  const [showApplications, setShowApplications] = useState(true); // State variable to track whether to show applications

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

        return response.data.map((jobApplication: any) => ({
          jobId: jobApplication.jobId,
          resume: jobApplication.resume,
        }));
      } catch (error) {
        throw new Error('Failed to fetch job applications');
      }
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error}</div>;
  }

  const toggleApplications = () => {
    setShowApplications(!showApplications);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mt-8">Your Job Applications</h1>
      {showApplications && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {jobApplications.map((jobApplication: any) => (
            <div
              key={jobApplication.jobId}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <p className="text-lg font-medium">{jobApplication.jobId}</p>
              <p className="text-gray-600">{jobApplication.resume}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
