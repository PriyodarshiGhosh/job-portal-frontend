import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import JobApplicationsList from './JobApplicationsList';
import { ToastContainer } from 'react-toastify';
import JobSearchPage from './JobSearch';
const CandidatesPage = () => {
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
              Job Applications
            </button>
            <button
              className={`py-2 px-4 font-semibold rounded ${
                activeTab === 'JobSearch' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
              }`}
              onClick={() => handleTabClick('JobSearch')}
            >
              Search For A Job
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
          <JobApplicationsList />
        ) : 
          <JobSearchPage />
        }
      </div>
      
    </div>
  );
};

export default CandidatesPage;
