import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import ApiRoutes from '@/config/apiRoutes';
import { axiosInstance } from '@/utils/axios';
import { useRouter } from 'next/router';

const useJobSearchView = (role: string, currentPage: number,setCurrentPage:any,jobData:any, setJobData: any,router:any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  

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
    handleNextPage
  };
};

export default useJobSearchView;