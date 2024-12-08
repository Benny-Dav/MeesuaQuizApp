import React from 'react'
import trophy2 from "../assets/images/trophy2.png"
import { useLocation} from 'react-router-dom';
import DashBottomMenu from '../components/DashBottomMenu';
import { useEffect } from 'react';
const QuizResults = () => {
  const location = useLocation();

  const {score, totalQuestions} = location.state ||{score:0, totalQuestions:0};

  const scorePercentage = (score)*10;
  const noOfWrong = 10 - (score);

   useEffect(()=>{
    localStorage.setItem("score",score);
   },[score])
  return (
    <section className='h-[100vh] w-full flex flex-col bg-[#FFF8DC] pt-[15%]'>
      
  
      <div className='h-[10%] '>
        <h2 className='font-bold text-4xl text-center'>Good Job</h2>
        
      </div>
      <div className='h-[40%] flex flex-col justify-center items-center mb-4'>
        <div className='h-56 w-56 rounded-full bg-[#E98640]'>
          <img src={trophy2} alt="" className='z-10 '/>
        </div>
        <h3 className='font-bold text-2xl'>Your Score : {scorePercentage} points</h3>
      </div>


      <div className='h-[40%] bg-white w-[70%] ml-auto mr-auto rounded-2xl flex flex-col px-4'>
        <p className='h-[20%] flex items-center font-bold text-xl  gap-x-2'><span className='text-yellow-600'>100% </span> Completion</p>
        <p className='h-[20%] flex items-center font-bold text-xl  gap-x-2'><span className='text-[blue]'>{totalQuestions}</span> Total Questions</p>
        <p className='h-[20%] flex items-center font-bold text-xl  gap-x-2'><span className='text-green-600'>{score}</span> Correct</p>
        <p className='h-[20%] flex items-center font-bold text-xl  gap-x-2'><span className='text-red-600'>{noOfWrong}</span> Wrong</p>
      </div>
      <DashBottomMenu/>
    </section>
  )
}

export default QuizResults
