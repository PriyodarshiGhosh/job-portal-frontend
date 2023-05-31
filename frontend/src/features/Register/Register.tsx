import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import useRegisterView from './views/useRegister';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './toastStyles.module.css';
export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(false);
    const {onSubmit}=useRegisterView(email,password,role)
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
          alert('Passwords do not match');
        }
      };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2"
      style={{
        backgroundImage: 'linear-gradient(0deg,#EDF6FF  60%,#303F60 60%)',
      }}
    >
       
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        style={{
          position: 'absolute',
          top: '95px',
          left: '442px',
          width: '557px',
          height: '711px',
          borderRadius: '20px',
          boxShadow: '0px 30px 36px #557DA526',
          opacity: 1,
        }}
      >
        <h1 className="block text-gray-700 font-bold text-3xl mb-2">Register</h1>
        <div className="flex items-center mb-2">
            <button
              className={`mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${role === 'candidate' ? 'bg-blue-700' : ''}`}
              onClick={handleCandidateClick} type="button"
            >
              Candidate
            </button>
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${role === 'recruiter' ? 'bg-blue-700' : ''}`}
              onClick={handleRecruiterClick} type="button"
            >
              Recruiter
            </button>
          </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${passwordMatch ? '' : 'border-red-500'}`}
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={handleConfirmPasswordChange}
          />
          {!passwordMatch && (
            <p className="text-red-500 text-xs italic">Passwords do not match</p>
          )}
        </div>
        {showSkillsField && (
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="skills">
              Skills
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="skills"
              type="text"
              placeholder="Skills"
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
        )}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            style={{
              position: 'relative',
              left: '180px',
              width: '148px',
              font: 'normal normal medium 16px/19px Helvetica Neue',
              color: '#FFFFFF',
              opacity: 1,
            }}
          >
            Register
          </button>
          <ToastContainer/>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 text-center">
            Already have an account?{' '}
            <a className="text-blue-600 hover:text-blue-800 hover:cursor-pointer" onClick={handleLoginClick}>
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}