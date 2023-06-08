import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { axiosInstance } from '@/utils/axios';
import ApiRoutes from '@/config/apiRoutes';
import Routes from '@/config/routes';
const useLoginView = () => {
  const queryClient = useQueryClient(); // Access QueryClient instance
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const router=useRouter();
    const handleRegisterClick = () => {
      router.push('/auth/register');
    };
    useEffect(()=>{
      const token = window.localStorage.getItem('token');
      if(token?.length){
        const role = window.localStorage.getItem('role');
        if (role === 'candidate') {
          router.push('/candidate/candidatePage');
        }  else if (role === 'recruiter') {
          router.push('/recruiter/recruiter');
        }
        else{
          router.push(Routes.LOGIN);
        }
      }
      },[])
  const loginMutation = useMutation(
    async () => {
      const response = await axiosInstance.post(ApiRoutes.LOGIN, { email, password });
      console.log(response) // Use axiosInstance instead of axios
      const token = response.data.accessToken;
      const role = response.data.role;
      // Store token in memory
      localStorage.setItem('token', token);
      localStorage.setItem('role',role)
      return { token, role };
    },
    {
      onSuccess: ({ role }) => {
        if (role === 'candidate') {
          router.push('/candidate/candidatePage');
        }  else if (role === 'recruiter') {
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
    email,
    setEmail,
    password,
    setPassword,
    handleRegisterClick
  };
};

export default useLoginView;