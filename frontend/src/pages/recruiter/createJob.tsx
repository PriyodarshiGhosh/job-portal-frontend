import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios';
import ApiRoutes from '@/config/apiRoutes';
import CreateJob from '@/features/Recruiter/CreateJob';
const CreateJobPage = () => {
  
    return <CreateJob/>
  
};

export default CreateJobPage;
