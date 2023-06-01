import axios from 'axios';
import { toast } from 'react-toastify';
import Routes from '@/config/routes';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5005',
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
      if(isRegisterPage){
        if(error?.response?.status === 422){
          toast.error('some entities have failed the check');
          throw error;
        }
      }
      if (!isLoginPage) {
        console.log("not login page")
        if (error?.response?.status === 401 || error?.response?.status === 402 ||error?.response?.status === 500) {
          toast.error('Unauthorized Access');
          console.log("enter")
          window.localStorage.removeItem('accessToken');
          window.location.replace(Routes.LOGIN);
        }
        else if(isRecruiterPage && error?.response?.status === 404){
            console.log("recruiter")
            toast.error("No applicants for this position")
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