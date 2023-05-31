import useFetchApplicationView from "./views/useFetchApplication";
import { useState, useEffect } from "react";
import { MdClose } from 'react-icons/md';

type FetchApplicationProps = {
  jobId: any;
  closeModal: () => void;
};

export default function FetchApplication({ jobId, closeModal }: FetchApplicationProps) {
  const [jobData, setJobData] = useState<any[]>([]);
  const { handleSubmit } = useFetchApplicationView(jobId, jobData, setJobData);

  useEffect(() => {
    // Call the handleSubmit function immediately after rendering
        handleSubmit();
  }, []);

  return (
    <div className="min-h-screen py-8" style={{
        width: '694px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        opacity: 1,
     }}>
      <div className="flex flex-col items-center">
        <button onClick={closeModal} className="close-icon">
          <MdClose />
        </button>
        <h2>
          <label className="block text-gray-700 font-bold mb-2">View Applicants</label>
        </h2>
        {jobData.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Resume of Applicants</h2>
            {jobData.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow-md rounded-lg p-4 mb-4"
              >
                <p className="text-gray-800 font-bold">ID: {job.id}</p>
                <p className="text-gray-800 font-bold">Resume: {job.resume}</p>
                <p className="text-gray-800 font-bold">UserId: {job.userId}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
