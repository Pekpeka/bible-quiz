import questions from './questions.ts';
import questions2 from './questions2.ts';
import shuffleArray from '../shuffle.ts';

export default function generateQuestions(){
    let quiz = [...questions,...questions2] // combine the questions
    quiz = shuffleArray(quiz) // shuffle the array
    quiz = quiz.slice(0,15) // choose the first 15 questions
    quiz.forEach((question)=>{
        question.options = shuffleArray(question.options) // shuffle the answers
    })
    return quiz;
}


