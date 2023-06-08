import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios';
import ApiRoutes from '@/config/apiRoutes';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { generateError, handleRemoveKey } from '@/utils/constants';

const useCreateJobView = (
  
) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [error,setError]=useState<any>({})
  const handleErrorChange=(key:string)=>{
    const error1=handleRemoveKey(key,error)
    setError(error1)
    
  }
  const handleFormSubmit = (event:any) => {
    event.preventDefault();
    handleSubmit();
    
  };
  const { mutateAsync } = useMutation(async (jwtToken: string) => {
    try{

    
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
    }).then((response)=>{
      console.log(response.data)
      toast.success('Job posting created successfully!');
      clearFormFields();
      return response.data;
    }).catch((error)=>{
      console.log(error)
        if(error?.response?.status===422){
          console.log(generateError(error))
          setError(generateError(error))
        }
    })

    
  }
  catch(error){
    console.log(error,"error")
  }
  });


  const handleSubmit = async () => {
    const jwtToken = localStorage.getItem('token') || '';

    try {
      await mutateAsync(jwtToken);
       // Clear form fields after successful submission
    } catch (error) {
     
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
    error,
    handleErrorChange,
    title, description, location, salary,setTitle,setDescription,setLocation,setSalary,handleFormSubmit
  };
};

export default useCreateJobView;
