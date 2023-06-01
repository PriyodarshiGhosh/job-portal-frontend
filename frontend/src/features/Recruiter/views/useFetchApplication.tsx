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
        console.log(response.data)
        return data;
      });
    
      const handleSubmit = async () => {
        const jwtToken = localStorage.getItem('token') || '';
        try {
          const jobResult = await mutateAsync(jwtToken);
          setJobData(jobResult);
        } catch (error) {
          
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