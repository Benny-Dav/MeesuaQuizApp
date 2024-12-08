import React from 'react'
import avatar1 from "../assets/images/avatar1.jpg"
import DashSubjects from '../components/DashSubjects'
import DashAchievements from '../components/DashAchievements'
import DashBottomMenu from '../components/DashBottomMenu'
const StudentDashboard = () => {
    return (
        <section className='h-[100vh] bg-[#FAF5EF] px-8 pt-12 flex flex-col gap-y-8'>
            {/* profile card */}
            <div className='w-full h-[10%] flex items-center gap-x-12 '>
                <div className='flex flex-col w-[60%]'>
                    <h3 className='font-extrabold text-4xl text-[#602F18] mb-2'>Hi Pamela,</h3>
                    <p className='text-lg text-[#8b4513]'>Great to see you again!</p>
                </div>
                <div className='w-24 border-2 h-24 rounded-full bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: `url(${avatar1})` }}>

                </div>
            </div>

            {/* achievements */}
            <DashAchievements/>

            {/* Subjects */}
            <DashSubjects/>

            {/* menu */}
            <DashBottomMenu/>
        </section>
    )
}

export default StudentDashboard