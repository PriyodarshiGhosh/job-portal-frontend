import { useState } from "react";
import useJobSearchView from "./views/useJobSearch";
import { useRouter } from "next/router";
import ReactModal from "react-modal";
import ApplyJob from "./ApplyJob";

export default function JobSearch() {
  const [role, setRole] = useState("");
  const [jobData, setJobData] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState("")

  const router = useRouter();
  const { handleSubmit, handleApply,handlePreviousPage,handleNextPage } = useJobSearchView(role,currentPage,setCurrentPage,jobData,setJobData,router);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJobId("");
  };

  const openModal = (jobId: string) => {
    setSelectedJobId(jobId);
    setIsModalOpen(true);
  };
  

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
        <div className="mt-8 grid grid-cols-4 gap-2">
          {jobData.data.map((job: any) => (
            <div
              key={job.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
            >
              <div>
                <p className="text-gray-800 font-bold">ID: {job.id}</p>
                <p className="text-gray-800 font-bold">Title: {job.title}</p>
                <p className="text-gray-800 font-bold">
                  Description: {job.description}
                </p>
                <p className="text-gray-800 font-bold">
                  Location: {job.location}
                </p>
                <p className="text-gray-800 font-bold">Salary: {job.salary}</p>
              </div>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => openModal(job.id)}
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
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