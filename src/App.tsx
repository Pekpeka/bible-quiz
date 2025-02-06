import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Score from './Components/Score';
import generateQuestions from './utils/Questions/generateQuestions';
import { AnimatePresence, motion } from 'motion/react';


type QuestionType = {
  question: string,
  options: Array<string>,
  answer: string,
  scripture: string,
  theme: string,
}

function App() {

  const exitAnimation = {
    x: "100vw",
    rotate: 8
  }

  const exitTransition = {
    duration: 0.5,
    type: "ease-out"
  }

  const [questions,]  =  useState<Array<QuestionType>>(()=> generateQuestions());
  const [answers, setAnswers] = useState<Array<number | null>>(Array(15).fill(null))
  const [isGameFinished, setIsGameFinished] = useState<boolean>(false)


  return (
    <>
      <AnimatePresence>
        {!isGameFinished && 
        <motion.div className='cards-wrapper' exit={exitAnimation} transition={exitTransition}>
          {questions.map((question, i) => <Card key={i + question.theme} question={question} qno={i} setAnswers={setAnswers} setIsGameFinished={setIsGameFinished} />)}
        </motion.div>
        }
      </AnimatePresence>
      {isGameFinished &&  <Score questions={questions} answers={answers}/>}
    </>
  )
}

export default App
