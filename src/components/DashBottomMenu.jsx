import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faBorderAll, faGift, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const DashBottomMenu = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full bg-[#FFF8DC] py-4 flex justify-around items-center shadow-lg'>
      <Link to="/student/dashboard" className='flex justify-center items-center'>
        <FontAwesomeIcon icon={faHome} className='text-[#8B4513] text-3xl hover:text-[#FF7043] transition-all duration-300'/>
      </Link>

      <div className='flex justify-center items-center'>
        <FontAwesomeIcon icon={faBorderAll} className='text-[#8B4513] text-3xl hover:text-[#FF7043] transition-all duration-300'/>
      </div>

      <div className='flex justify-center items-center'>
        <FontAwesomeIcon icon={faUser} className='text-[#8B4513] text-3xl hover:text-[#FF7043] transition-all duration-300'/>
      </div>

      <div className='flex justify-center items-center'>
        <FontAwesomeIcon icon={faGift} className='text-[#8B4513] text-3xl hover:text-[#FF7043] transition-all duration-300'/>
      </div>
    </div>
  )
}

export default DashBottomMenu;

