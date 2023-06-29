import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import ApiRoutes from '@/config/apiRoutes';
import { axiosInstance } from '@/utils/axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const useJobSearchView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [role, setRole] = useState("");
  const [jobData, setJobData] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState("")
  const router=useRouter()
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
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJobId("");
  };
  const { mutateAsync } = useMutation(async (jwtToken: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.get(
        ApiRoutes.CANDIDATE + `/?search=${role}&currentPage=${currentPage}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      
      throw new Error('Error fetching jobs');
    } finally {
      setIsLoading(false);
    }
  });

  const handleApply = (jobId: string) => {
    router.push(`http://localhost:3000/candidate/applyJob?jobId=${jobId}`);
  };
  const handlePreviousPage = async () => {
    if (currentPage > 1) {
      const jwtToken = localStorage.getItem("token") || "";
      try {
        const previousPage = currentPage - 1;
        const response = await axiosInstance.get(
          ApiRoutes.CANDIDATE + `/?search=${role}&currentPage=${previousPage}`,
          {
            headers: {
              "Content-Type": "application/json",
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
      const jwtToken = localStorage.getItem("token") || "";
      try {
        const nextPage = currentPage + 1;
        const response = await axiosInstance.get(
          ApiRoutes.CANDIDATE + `/?search=${role}&currentPage=${nextPage}`,
          {
            headers: {
              "Content-Type": "application/json",
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
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const jwtToken = localStorage.getItem('token') || '';

    try {
      const jobResult = await mutateAsync(jwtToken);
      console.log(jobResult)
      setJobData(jobResult);
      setCurrentPage(1);
     
    } catch (error) {
      alert('Error fetching jobs');
    }
  };

  useEffect(() => {
    if (jobData) {
    }
  }, [jobData]);

  return {
    handleSubmit,
    handleApply,
    handlePreviousPage,
    handleNextPage,role,setRole,jobData,setJobData,currentPage,setCurrentPage,router,formatSalary,closeModal,selectedJobId,isModalOpen,setSelectedJobId,setIsModalOpen
  };
};

export default useJobSearchView;