import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios';
import ApiRoutes from '@/config/apiRoutes';
const useFetchApplicationView=(Id:number,jobData:any,setJobData:any)=>{
    const { mutateAsync } = useMutation(async (jwtToken: string) => {
        const response = await axiosInstance.get(ApiRoutes.RECRUITER+`/id?id=${Id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        const data = response.data;
        console.log(data);
        return data;
      });
    
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const jwtToken = localStorage.getItem('token') || '';
        try {
          const jobResult = await mutateAsync(jwtToken);
          setJobData(jobResult);
          console.log(jobResult);
          alert('Here are the list of available applicants for your posted job');
        } catch (error) {
          alert(`No applicants for this position`);
        }
      };
    
      useEffect(() => {
        if (jobData) {
          console.log(jobData);
        }
      }, [jobData]);
      return {
        handleSubmit,
      }
}
export default useFetchApplicationView;