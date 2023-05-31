import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import useLoginView from './views/useLogin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from '@tanstack/react-query';
import { useRouter } from 'next/router';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const router=useRouter();
    const {handleSubmit}=useLoginView(email,password)
    const handleRegisterClick = () => {
        router.push('/auth/register');
      };
  return (
    <div className="flex items-center justify-center h-screen"
    style={{
      backgroundImage: 'linear-gradient(0deg,#EDF6FF  60%,#303F60 60%)',
    }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
        style={{
          position: 'absolute',
          top: '160px',
          left: '442px',
          width: '557px',
          height: '427px',
          borderRadius: '20px',
          boxShadow: '0px 30px 36px #557DA526',
          opacity: 1,
        }}
      >
        <h1 className="block text-gray-700 font-bold text-3xl mb-2">Login</h1>
        <h1 className="text-2xl font-medium mb-6">Log in</h1>
        <div className="mb-4">
          <label htmlFor="email" className="bg-white text-gray-800 px-2 py-1 rounded-md">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="bg-white text-gray-800 px-2 py-1 rounded-md">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-600 h-19 py-2 px-4 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          style={{
            position: 'relative',
            left: '180px',
            width:'148px',
            font: 'normal normal medium 16px/19px Helvetica Neue',
            color: '#FFFFFF',
            opacity: 1,
          }}
        >
          Log In
        </button>
        <ToastContainer/>
        <div className="mt-4">
          <p className="text-gray-700 text-center">
            Don't have an account?{' '}
            <a className="text-blue-600 hover:text-blue-800 hover:cursor-pointer" onClick={handleRegisterClick}>
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}