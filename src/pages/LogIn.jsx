import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <section className='h-[100vh] flex flex-col justify-center items-center bg-[#FFF8DC] px-6'>
      <div className='max-w-md w-full bg-white p-10 rounded-lg shadow-lg'>
        <h1 className='text-5xl font-bold text-center text-[#8B4513] italic mb-8'>Meesua</h1>
        <h3 className='text-2xl font-semibold text-gray-700 mb-6 text-center'>Log In to your account</h3>

        <form className='flex flex-col gap-y-6'>
          <input
            type='email'
            className='w-full h-12 rounded-lg shadow-md border text-lg text-gray-700 px-4 focus:outline-none focus:border-[#15f851] focus:ring-2 focus:ring-[#15f851] transition-all duration-300'
            placeholder='Email'
          />
          <input
            type='password'
            className='w-full h-12 rounded-lg shadow-md border text-lg text-gray-700 px-4 focus:outline-none focus:border-[#15f851] focus:ring-2 focus:ring-[#15f851] transition-all duration-300'
            placeholder='Password'
          />
          
          <Link to="/student/dashboard">
          <button
            type='submit'
            className='bg-[#8B4513] w-full text-white py-3 rounded-lg text-lg font-bold hover:bg-[#FFBA27] transition-all duration-300'
          >
            Log In
          </button>
          </Link>
        </form>

        <div className='flex justify-center items-center gap-x-2 text-lg mt-4'>
          <p>Don't have an account?</p>
          <Link 
            to="/student-signup" 
            className='text-[#8B4513] font-semibold hover:text-[#FF7043] transition-colors duration-300'
          >
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
