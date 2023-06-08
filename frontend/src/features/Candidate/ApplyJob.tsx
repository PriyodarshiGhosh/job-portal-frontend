import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useApplyJobView from './views/useApplyJob';
import { MdClose } from 'react-icons/md';
type ApplyJobProps = {
  jobId: string;
  closeModal: () => void;
};

export default function ApplyJob({ jobId, closeModal }: ApplyJobProps) {
  const [jobIdState, setJobIdState] = useState('');
  const { handleSubmit,resume ,setResume} = useApplyJobView(jobId);
  const router = useRouter();

  // Retrieve jobId from the query parameter in the URL
  useEffect(() => {
    const { query } = router;
    const jobIdParam = query.jobId as string;

    if (jobIdParam) {
      setJobIdState(jobIdParam);
    }
  }, [router.query]);

  

  return (
    <div className="min-h-screen py-8" style={{ backgroundImage: 'linear-gradient(0deg, #EDF6FF 60%, #303F60 60%)' }}>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mt-8">Apply for a Job</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
          style={{
            position: 'absolute',
            top: '160px',
            left: '442px',
            width: '557px',
            height: '427px',
            borderRadius: '20px',
            boxShadow: '0px 30px 36px #557DA526',
            opacity: 1,
          }}
        >
            <button onClick={closeModal} className="close-icon">
            <MdClose />
          </button>
            <h2 ><label className="block text-gray-700 font-bold mb-2">Submit your resume for the given job</label></h2>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="resume">
              Resume
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="resume"
              placeholder="Enter your resume here"
              value={resume}
              onChange={(event) => setResume(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
