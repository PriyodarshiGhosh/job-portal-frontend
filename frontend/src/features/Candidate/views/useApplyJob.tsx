import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios';
import ApiRoutes from '@/config/apiRoutes';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
const useApplyJobView=(jobId:any)=>{
  const [resume, setResume] = useState('');
  const [jobIdState, setJobIdState] = useState('');
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
      const router = useRouter();

  // Retrieve jobId from the query parameter in the URL
  useEffect(() => {
    const { query } = router;
    const jobIdParam = query.jobId as string;

    if (jobIdParam) {
      setJobIdState(jobIdParam);
    }
  }, [router.query]);
    
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const jwtToken = localStorage.getItem('token') || '';
        console.log(jwtToken);
        try {
          await mutateAsync(jwtToken);
          toast.success('Job application submitted successfully!');
        } catch (error:any) {
          
        }
      };
      return {
        handleSubmit,resume,setResume
      };
}
export default useApplyJobView;