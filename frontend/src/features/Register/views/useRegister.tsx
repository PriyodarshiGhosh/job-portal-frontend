import { useMutation} from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { axiosInstance } from '@/utils/axios';
import ApiRoutes from '@/config/apiRoutes';
import { useState } from 'react';
const useRegisterView = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [showSkillsField, setShowSkillsField] = useState(false);
    const router=useRouter();
    const [skills, setSkills] = useState('');
    const handleLoginClick = () => {
        router.push('/auth/login');
      };
    const handleCandidateClick = () => {
        setShowSkillsField(true);
        setRole('candidate');
      };
    
      const handleRecruiterClick = () => {
        setShowSkillsField(false);
        setRole('recruiter');
      };
      const handleConfirmPasswordChange = (e:any) => {
        setConfirmPassword(e.target.value);
        setPasswordMatch(e.target.value === password);
      };
      const handleSubmit = (e:any) => {
        e.preventDefault();
        if (passwordMatch) {
          // Perform form submission or call onSubmit function
          onSubmit(e);
        } else {
          // Show an error message or perform any other necessary action
          // alert('Passwords do not match');
        }
      };
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
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    role,
    setRole,
    passwordMatch, setPasswordMatch,
    showSkillsField, setShowSkillsField,
    skills, setSkills,
    handleLoginClick,
    handleCandidateClick,
    handleRecruiterClick,handleConfirmPasswordChange,
    handleSubmit
  };
};

export default useRegisterView;