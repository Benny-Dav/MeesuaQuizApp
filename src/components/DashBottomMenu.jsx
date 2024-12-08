import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faBorderAll, faGift, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const DashBottomMenu = () => {
  return (
    <div className='h-[10%] mt-[10%] flex justify-between items-center px-[10%]'>
        <Link to="/student/dashboard">
        <FontAwesomeIcon icon={faHome} className='text-[#8B4513] text-4xl'/>
        </Link>

        <FontAwesomeIcon icon={faBorderAll} className='text-[#8B4513] text-4xl'/>

        <FontAwesomeIcon icon={faUser} className='text-[#8B4513] text-4xl'/>

        <FontAwesomeIcon icon={faGift} className='text-[#8B4513] text-4xl'/>
        
        </div>
  )
}

export default DashBottomMenu