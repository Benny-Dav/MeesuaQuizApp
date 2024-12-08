import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const timer = setTimeout(()=>{
      navigate("/student-signup")
    },3000)

    return()=>{
      clearTimeout(timer);
    };
  },[]);
  return (
    <section className="h-[100vh] w-full bg-[#FFF8DC] flex justify-center items-center">
        <h1 className='text-7xl font-extrabold text-center italic animate-bounce text-[#8B4513]'>Meesua</h1>

    </section>
  )
}

export default Welcome