import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { apiGetQuestions } from '../services/getQuestions';
import DashBottomMenu from '../components/DashBottomMenu';
import hourglass from "../assets/images/hourglass.png"

const Quiz = () => {

    const navigate = useNavigate();
    const { categoryId } = useParams();

    const [questions, setQuestions] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);

    const [timer, setTimer] = useState(10);

    const [selectedAnswer, setSelectedAnswer] = useState([]);

    const [score, setScore] = useState(0)

    const fetchQuestions = async () => {
        try {
            const response = await apiGetQuestions(categoryId);
            console.log(response);
            setQuestions(response.data.triviaQuestions);

        } catch (error) {
            console.log(error);
        }
    }

    //useEffect to fetch questions
    useEffect(() => {
        fetchQuestions();
    }, [categoryId])

    //useEffect to start and reset timer
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));

        }, 1000);
        return () => clearInterval(interval);
    },)

    //useEffect to move to next question when timer reaches 0
    useEffect(() => {
        if (timer === 0 && currentPage < questions.length - 1) {
            const isCorrect = selectedAnswer[currentPage] === questions[currentPage].correct_answer;
            if (isCorrect) setScore((prevScore) => prevScore + 1);

            setCurrentPage((prev) => prev + 1);
            setTimer(10);
        }
    }, [timer, currentPage, questions, selectedAnswer]);


    //func to store selected ans
    const handlePickedAns = (answer) => {
        setSelectedAnswer((prevAns) => {
            const updatedAns = [...prevAns];
            updatedAns[currentPage] = answer;
            return updatedAns;
        });

    }

    //useEffect to navigate when quiz ends

    useEffect(() => {
        if (currentPage === questions.length - 1 && timer === 0) {
            const finalScore = selectedAnswer[currentPage] === questions[currentPage].correct_answer ? score + 1 : score;

            setTimeout(() => {
                console.log("Current Page:", currentPage, "Timer:", timer, "Score:", score);
                navigate("/quizResults", { state: { score: finalScore, totalQuestions: questions.length } });
            }, 100);
        }

    }, [currentPage, questions.length, navigate, timer, selectedAnswer])

    return (
        <section className='min-h-screen w-full bg-gradient-to-b from-[#F5E8C7] to-[#FAF5EF] flex flex-col pt-16 px-6'>
            <div className='w-full h-2 bg-gray-300 mb-6'>
                {/* PROGRESS BAR */}
                <div
                    className='h-full bg-[#8B4513]'
                    style={{ width: `${((currentPage + 1) / questions.length) * 100}%` }}
                />
            </div>
            <h3 className='text-center font-extrabold text-4xl text-[#602F18] mb-4'>
                Question {currentPage + 1} of {questions.length}
            </h3>
            <div className='w-full flex justify-center items-center  h-[5%]'>
                <img src={hourglass} alt="" className='h-12 mr-4 animate-pulse' />
                <p className='text-2xl font-extrabold text-red-600 text-center'>Time left : {timer}</p>
            </div>
            {questions.length > 0 && (
                <div className='flex flex-col items-center'>
                    <h3 className='text-2xl font-bold text-gray-800 text-center mb-8'>
                        {questions[currentPage].question}
                    </h3>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl'>
                        {([...questions[currentPage].incorrect_answers, questions[currentPage].correct_answer]
                            .map((answer,index) => (
                                <li onClick={() => handlePickedAns(answer)}
                                    className={`rounded-xl p-4 text-center text-xl font-bold text-white  transition cursor-pointer ${answer === selectedAnswer[currentPage] ? 'bg-blue-600' : " bg-orange-400"}`}
                                    key={`${index}-${answer}`}
                                >
                                    {answer}
                                </li>
                            )))}
                    </ul>
                </div>
            )}
            <div className='flex justify-center items-center mt-8 mb-[55%]'>

                <button
                    onClick={() => {
                        const isCorrect = selectedAnswer[currentPage] === questions[currentPage].correct_answer;
                        if (isCorrect) setScore((prevScore) => prevScore + 1);

                        setCurrentPage((prev) => Math.min(prev + 1, questions.length - 1));
                        setTimer(10);
                    }}
                    disabled={currentPage === questions.length - 1}
                    className={`py-2 px-6 font-bold text-xl rounded-md ${currentPage === questions.length - 1
                        ? 'bg-gray-400'
                        : 'bg-[#8B4513] text-white hover:bg-[#704117]'
                        }`}
                >
                    Next
                </button>
            </div>
            <DashBottomMenu />
        </section>

    )
}

export default Quiz