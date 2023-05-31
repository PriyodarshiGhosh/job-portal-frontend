import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios';
import ApiRoutes from '@/config/apiRoutes';
const useCreateJobView=(title:string,description:string,location:string,salary:string)=>{
    const { mutateAsync } = useMutation(async (jwtToken: string) => {
        const response = await axiosInstance.post(ApiRoutes.RECRUITER, {
          title,
          description,
          location,
          salary,
        }, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwtToken}`,
          },
        });
    
        return response.data;
      });
    
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const jwtToken = localStorage.getItem('token') || '';
    
        try {
          await mutateAsync(jwtToken);
          alert('Job posting created successfully!');
        } catch (error) {
          alert(`Error creating job posting`);
        }
      }; 
      return{
        handleSubmit,
      }

}
export default useCreateJobView;