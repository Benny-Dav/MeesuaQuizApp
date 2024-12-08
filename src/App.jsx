import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Welcome from './pages/Welcome'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import StudentDashboard from './pages/StudentDashboard'
import Quiz from './pages/Quiz'
import QuizResults from './pages/QuizResults'

function App() {
  const router = createBrowserRouter([
     {
      path:"/",
      element:<Welcome/>
     },
     {
      path:"/student-signup",
      element:<SignUp/>
     },
     {
      path:"/student-login",
      element:<LogIn/>
     },
     {
      path:"/student/dashboard",
      element:<StudentDashboard/>
     },
     {
      path:"/quiz/:categoryId",
      element:<Quiz/>
     },
     {
      path:"/quizResults",
      element:<QuizResults/>
     }
  ])


   return <RouterProvider router={router}/>
}

export default App
