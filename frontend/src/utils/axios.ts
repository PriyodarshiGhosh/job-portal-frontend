import axios from 'axios';
import { toast } from 'react-toastify';
import Routes from '@/config/routes';
import Router from 'next/router'
export const axiosInstance = axios.create({
  baseURL: 'http://172.31.3.137:5005',
  timeout: 30000,
});
const getGenericErrorMessage = (e: any) => {
    const text = e.response?.data?.errors
      ? Object.values(e.response?.data?.errors)[0]
      : e.response?.data?.message || 'Something went wrong!';
    toast.error(text);
  };
  axiosInstance.interceptors.request.use(request => {
    const storedToken = window.localStorage.getItem('accessToken');
    const signature = window.localStorage.getItem('signature');
    const params = new URLSearchParams(window.location.search);
  
    request.headers['x-device-client'] = 'agent-partner-panel';
    
  
    if (storedToken || (params.get('auth') as string)) {
      request.headers.Authorization = !params.get('auth')
        ? `Bearer ${storedToken}`
        : `Bearer ${params.get('auth')}`;
    }
  
    if (signature) {
      request.headers['x-device-hash'] = signature;
    }
  
    return request;
  });
  
  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
  
    (error) => {
      const isLoginPage = window.location.pathname.includes(Routes.LOGIN) 
      const isRegisterPage=window.location.pathname.includes(Routes.REGISTER)
      const isRecruiterPage=window.location.pathname.includes(Routes.RECRUITER)
      const isCandidatePage=window.location.pathname.includes(Routes.CANDIDATE)
      if(isRegisterPage){
        if(error?.response?.status === 422){
          if(error?.response?.data?.errors?.password && error?.response?.data?.errors?.password[0]==='Password must be longer than or equal to 6 characters'){
            toast.error('Password must be larger than 6 characters');
          }
          if(error?.response?.data?.errors?.email &&error?.response?.data?.errors?.email[0]==='Email must be an email'){
            toast.error('Please enter a valid email');
          }
          throw error;
        }
      }
       if (!isLoginPage) {
        console.log("not login page")
        if (error?.response?.status === 401 || error?.response?.status === 402 ||error?.response?.status === 500) {
          toast.error('Unauthorized Access');
          console.log("enter")
          window.localStorage.removeItem('accessToken');
          Router.push(Routes.LOGIN)
          //window.location.replace(Routes.LOGIN);
        }
       else if(isCandidatePage && error?.response?.status === 403){
          toast.error("already applied")
        }
        else if(isRecruiterPage && error?.response?.status === 404){
            console.log("recruiter")
            toast.error("No applicants for this position")
        }
        else if(isRecruiterPage && error?.response?.status === 403){
          toast.error('Unauthorized Access')
          Router.push(Routes.LOGIN)
            // window.location.replace(Routes.LOGIN);
        }
        else if(error?.response?.status === 404||error?.response?.status === 422){
            console.log("error received")
            throw error;
            toast.error('Invalid inputs given')
            
        }
      } else if (isLoginPage && error?.response?.status === 404) {
        toast.error('Invalid credentials');
        throw error;
      }
  
      
    }
  );