import React, { useState , useEffect} from 'react'
import medal from "../assets/images/medal.png"
import trophy from "../assets/images/trophy.png"

const DashAchievements = () => {
//    const [points, setPoints]=useState({score:0});

    // useEffect(()=>{
    //     const savedPoints = localStorage.getItem("score");
    //     if(savedPoints){
    //         setPoints(JSON.parse(savedPoints));
    //     }
        
    // },[])
  return (
    <div className='w-full h-[10%] rounded-2xl bg-[#E98640] flex justify-between '>
                {/* acheivement 1 */}
                <div className='flex w-[50%]'>
                    <div className='w-1/2 flex justify-center items-center'>
                        <img src={medal} alt="" className='h-3/4 ' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-2xl font-extrabold text-white'>1427</p>
                        <p className='text-white'>Points</p>
                    </div>
                </div>

                {/* achievement2 */}
                <div className='flex w-[50%]'>
                    <div className='w-1/2 flex justify-center items-center'>
                        <img src={trophy} alt="" className='h-3/4' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-2xl font-extrabold text-white'>7</p>
                        <p className='text-white'>Ranking</p>
                    </div>
                </div>
            </div>
  )
}

export default DashAchievements