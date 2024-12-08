import React, { useEffect, useState } from 'react';
import { apiGetSubjects } from '../services/getCategories';
import genKnow from "../assets/images/genKnow.png"
import { useNavigate } from 'react-router-dom';

const DashSubjects = () => {
    const navigate = useNavigate();
    const [getSubjects, setGetSubjects] = useState([]);

    const fetchSubjects = async () => {
        try {
            const subjects = await apiGetSubjects();
            setGetSubjects(subjects.data.triviaCategories || []); // Ensure data is an array or default to an empty array
            console.log(subjects); // Debugging the API response
            const limitedSubjects = subjects.data.triviaCategories.slice(0,4);
            setGetSubjects(limitedSubjects);
        } catch (error) {
            console.error('Error fetching subjects:', error);
        }
    };

    useEffect(() => {
        fetchSubjects();
    }, []);

    const openQuiz=(subject)=>{
        navigate(`/quiz/${subject.id}`);
    }

    return (
        <div className='h-[55%]'>
            <h3 className='font-bold text-2xl text-[#602F18] mb-4'>Pick a subject</h3>
            <div className='h-full w-full rounded-xl flex flex-col '>
                {getSubjects.length > 0 ? (
                    getSubjects.map((subject, index) => (
                        <div onClick={() => openQuiz(subject)} key={index} className='w-full h-[20%] rounded-2xl bg-[#FAE6CD] flex justify-between items-center px-4 gap-x-4 mb-2 '>
                            <div className='w-[20%] '>
                                <img src={genKnow} alt="" className='h-full' />
                            </div>
                            <div className='w-[60%] '>
                                <p className='font-bold text-[#602F18] text-xl'>{subject.name}</p>
                                </div>
                            <div className='w-[10%]'>
                                
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 p-4">No subjects available</p>
                )}
            </div>
        </div>
    );
};

export default DashSubjects;
