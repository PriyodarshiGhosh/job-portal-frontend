import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateJobPage from './createJob';
import JobsListPage from './fetchCreatedJobs';

const Recruiter = () => {
  const [activeTab, setActiveTab] = useState('jobApplications');
  const router = useRouter();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    // Remove the token from localStorage or your authentication mechanism         
    localStorage.removeItem('token');
    // Redirect to the login page
    router.push('/auth/login');
  };

  const handleError = (error: Error) => {
    console.error('An error occurred:', error.message);
    router.push('/Auth/login');
  };

  return (
    <div className="min-h-screen py-8" style={{ backgroundImage: 'linear-gradient(0deg, #EDF6FF 60%, #303F60 60%)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between mb-4">
          <div className="space-x-4">
            <button
              className={`py-2 px-4 font-semibold rounded ${
                activeTab === 'jobApplications' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
              }`}
              onClick={() => handleTabClick('jobApplications')}
            >
              Fetch your job postings
            </button>
            <button
              className={`py-2 px-4 font-semibold rounded ${
                activeTab === 'candidatePage' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
              }`}
              onClick={() => handleTabClick('candidatePage')}
            >
              Create a Job Posting
            </button>
            
          </div>
          <button
            className="py-2 px-4 font-semibold rounded bg-red-500 text-white"     
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        {activeTab === 'jobApplications' ? (                                
          <JobsListPage />
        ) : 
          <CreateJobPage />
        }
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Recruiter;
