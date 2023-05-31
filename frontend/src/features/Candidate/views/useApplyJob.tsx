import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { axiosInstance } from '@/utils/axios';
import ApiRoutes from '@/config/apiRoutes';
const useApplyJobView=(resume:string,jobId:any)=>{
    const { mutateAsync } = useMutation(async (jwtToken: string) => {
        try {
          const response = await axiosInstance.post(
            ApiRoutes.CANDIDATE,
            { resume, jobId },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`,
              },
            }
          );
          return response.data;
        } catch (error) {
          throw new Error('Error submitting job application');
        }
      });
    
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const jwtToken = localStorage.getItem('token') || '';
        console.log(jwtToken);
        try {
          await mutateAsync(jwtToken);
          alert('Job application submitted successfully!');
        } catch (error:any) {
          alert(error.message);
        }
      };
      return {
        handleSubmit,
      };
}
export default useApplyJobView;