import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios';
import ApiRoutes from '@/config/apiRoutes';
import { toast } from 'react-toastify';

const useCreateJobView = (
  title: string,
  description: string,
  location: string,
  salary: string,
  setTitle: (value: string) => void,
  setDescription: (value: string) => void,
  setLocation: (value: string) => void,
  setSalary: (value: string) => void
) => {
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

  const handleSubmit = async () => {
    const jwtToken = localStorage.getItem('token') || '';

    try {
      await mutateAsync(jwtToken);
      toast.error('Job posting created successfully!');
      clearFormFields(); // Clear form fields after successful submission
    } catch (error) {
      // Handle error
    }
  };

  const clearFormFields = () => {
    setTitle('');
    setDescription('');
    setLocation('');
    setSalary('');
  };

  return {
    handleSubmit,
    
  };
};

export default useCreateJobView;
