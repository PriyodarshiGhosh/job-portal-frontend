import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { axiosInstance } from '@/utils/axios';
import ApiRoutes from '@/config/apiRoutes';
const useLoginView = (email:string,password:string) => {
  const router = useRouter();
  const queryClient = useQueryClient(); // Access QueryClient instance

  const loginMutation = useMutation(
    async () => {
      const response = await axiosInstance.post(ApiRoutes.LOGIN, { email, password });
      console.log(response) // Use axiosInstance instead of axios
      const token = response.data.accessToken;
      const role = response.data.role;
      // Store token in memory
      localStorage.setItem('token', token);
      return { token, role };
    },
    {
      onSuccess: ({ role }) => {
        if (role === 'candidate') {
          router.push('/candidate/candidatePage');
        } else if (role === 'admin') {
          router.push('/admin');
        } else if (role === 'recruiter') {
          router.push('/recruiter/recruiter');
        }
      }
    }
  );

  const handleSubmit = (event:any) => {
    event.preventDefault();
    loginMutation.mutate();
  };

  return {
    handleSubmit,
  };
};

export default useLoginView;