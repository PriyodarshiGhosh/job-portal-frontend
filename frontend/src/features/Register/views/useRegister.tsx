import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { axiosInstance } from '@/utils/axios';
import ApiRoutes from '@/config/apiRoutes';
const useRegisterView = (email:string,password:string,role:string) => {
  const router = useRouter();
  const queryClient = useQueryClient(); // Access QueryClient instance

  const registerMutation = useMutation(
    async () => {
      const response = await axiosInstance.post(ApiRoutes.REGISTER, { email, password ,role});
      console.log(response) // Use axiosInstance instead of axios
      return { response };
    },
    {
      onSuccess: (event:any) => {
          router.push('/auth/login');
       
         
        }
      }
    
  );

  const onSubmit = (event:any) => {
    event.preventDefault();
    registerMutation.mutate();
  };

  return {
    onSubmit,
  };
};

export default useRegisterView;