import JobsList from "@/features/Recruiter/FetchCreatedJobs";
import ReactModal from "react-modal";
const JobsListPage = () => {
    ReactModal.setAppElement("#__next");
   return <JobsList/>;
  
};

export default JobsListPage;
