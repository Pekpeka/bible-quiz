import { motion, AnimatePresence } from "motion/react"
import Skip from '../assets/Skip.svg?react'
import Tick from '../assets/Tick.svg?react'
import { useState } from "react"

const TOTAL_NO_OF_QUESTION = 15;

type QuestionType = {
    question: string,
    options: Array<string>,
    answer: string,
    scripture: string,
    theme: string,
}
type CardProps = {
    question: QuestionType;
    qno: number;
    setAnswers: (prev: any) => void;
    setIsGameFinished: (state: boolean) => void;
};
type ChoiceOptions = number | null

export default function Card({ question, qno, setAnswers, setIsGameFinished }: CardProps) {
    const [choice, setChoice] = useState<ChoiceOptions>(null);
    const [skip, setSkip] = useState<boolean>(false);
    const [submit, setSubmit] = useState<boolean>(false);
    const show = !submit && !skip;
    const questionNo = TOTAL_NO_OF_QUESTION - qno
    const exitAnimation = {
        x: "100vw",
        rotate: 8
    }

    const exitTransition = {
        duration: 0.7,
        type: "ease-out"
    }

    const handleChoose = (selectedChoice: number) => {
        setChoice(selectedChoice)
    }

    const handleSkip = () => {
        setSkip(true)
        if (questionNo === 15)
            setIsGameFinished(true)
    }

    const handleSubmit = () => {
        if (choice !== null) {
            setAnswers((prev: any) => {
                const updatedAnswers = [...prev];
                updatedAnswers[qno] = choice
                return updatedAnswers;
            })
            setSubmit(true)
            if (questionNo === 15)
                setIsGameFinished(true)
        }
    }

    return (
        <AnimatePresence>
            {show &&
                <motion.div className="card-wrapper"
                    exit={exitAnimation} transition={exitTransition}
                >
                    <div className="card" >
                        <div className="top">
                            <h1>Bible Quiz</h1>
                        </div>
                        <div className="mid">
                            <section className="section-question">
                                <h2>Questions {questionNo}/{TOTAL_NO_OF_QUESTION}</h2>
                                <h1>{question.question}</h1>
                            </section>
                            <section className="section-options">
                                <div className="section-options-answers">
                                    {question.options.map((option: string, idx: number) => {
                                        return (
                                            <motion.div 
                                            key={`${qno}-${idx}`} 
                                            whileHover={{ scale: 1.01 }} 
                                            whileTap={{ scale: 0.99 }} 
                                            className={`section-option-answer ${choice === idx ? 'selected' : ''}`} 
                                            onClick={() => { handleChoose(idx) }}>
                                                <h1>{option}</h1>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </section>
                        </div>
                        <div className="bottom">
                            <div className="bottom-buttons-wrapper">
                                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }} className='button-style box-shadow' onClick={handleSkip} id="skip-button">
                                    <Skip />
                                    <h1>Skip</h1>
                                </motion.button>
                                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }} className='button-style box-shadow' onClick={handleSubmit} id="submit-button">
                                    <Tick />
                                    <h1>Submit</h1>
                                </motion.button>
                            </div>

                        </div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>

    )
}
