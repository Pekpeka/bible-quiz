import useDelayRender from '../utils/hooks/useDelayRender.ts'

const TOTAL_NO_OF_QUESTIONS = 15;

type QuestionType = {
  question: string,
  options: Array<string>,
  answer: string,
  scripture: string,
  theme: string,
}

type AnswerType = number | null

type ScorePropsType = {
  questions: Array<QuestionType>,
  answers: Array<AnswerType>
}

type AnswersPropsType = {
  question: QuestionType,
  answer: AnswerType,
  qNo: number,
}

function Answers({question, answer, qNo} : AnswersPropsType) {
  
  const questionNo =  TOTAL_NO_OF_QUESTIONS - qNo;
  let correctAnswer : boolean = false;
  if(answer !== null)
    correctAnswer = question.answer === question.options[answer as number];
  return (
    <>
      <div className="card">
        <div className="mid">
          <section className="section-question">
            <h2>Questions {questionNo}/{TOTAL_NO_OF_QUESTIONS}</h2>
            <h1>{question.question}</h1>
          </section>
          <section className="section-options">
            <div className="section-options-answers">
              {question.options.map((option: string, idx: number) => {
                return (
                  <div 
                  key={`${qNo}-${idx}`} 
                  className={`section-option-answer ${answer === idx ? 'selected' : ''} ${question.options[idx] === question.answer? ' correct-answer' : ''}`} >
                    <h1>{option}</h1>
                  </div>
                )
              })}
              {<h1>Scripture reference: {question.scripture}</h1>}
              {answer && !correctAnswer && <h1 style={{margin: '5px 0'}}>You answered incorrectly</h1>}
              {correctAnswer && <h1 style={{margin: '5px 0'}}>You answered correctly</h1>}
            </div>
          </section>
        </div>
      </div>

    </>
  )
}


export default function Score({questions, answers} : ScorePropsType) {

  let score = 0;
  answers.forEach((answer,aNo)=>{
    if(answer !== null && questions[aNo].options[answer] === questions[aNo].answer)
        score++;
  })
  const isDelay = useDelayRender(2000);

  if (isDelay) {
    return <h1 style={{
      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'Pacifico', fontSize: '3rem'
    }}>
      Your score is loading...
    </h1>
  }

  return (
    <>
        <div className="score-wrapper">
      <div className="score-card-container">
        <div className="card scoreboard">
          <h1>Your score is {score}/15</h1>
        </div>
      </div>
    </div>

      <div className="score-wrapper">
      {questions.map((_,qNo) =>{
        return (
          <div className="score-card-container" key={qNo + 'answer-card'}>
            <Answers question={questions[qNo]} answer={answers[qNo]} qNo={qNo}/>
          </div>
        )
      })}

    </div>
    </>

  )
}
