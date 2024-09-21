import { useState, useCallback, useEffect } from "react";
import   QUESTIONS  from "../questions";
import Question from "./Question";
import Summary from "./Summary";


export default function Quiz() {
  let [ userAnswers, setUserAnswers ] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  //function to calculate de user answers if wrong or right 

//   function elper() {
//     let answers = [...userAnswers]
//     let usersStats = [];
//           for(let j = 0; j < answers.length; j++) {
//             for(let i = 0; i < QUESTIONS.length; i++) {    
//             if(answers[j] !== null && QUESTIONS[i].answers.includes(answers[j])) {  
//                let detai = {
//                   question: QUESTIONS[i].text,
//                   answer: answers[j]
//                  }
//                usersStats.push(detai)
//                console.log( QUESTIONS[i].text)
//                console.log(usersStats.length)
//             }else {
//                console.log(`weee`)
//                let detai = {
//                   question: QUESTIONS[i].text,
//                   answer: null
//                  }
//               usersStats.push(detai)
//             }
//           }
         
//         }  

//         return usersStats
   
//   }

 let handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswers) => {
      return [
           ...prevAnswers,
           selectedAnswer
       ];
   });

  }, []);
   

//gh

const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

 if(quizIsComplete) {
   return  <Summary userAnswers = {userAnswers} />
 }
  
 return ( 
    <div id="quiz">
     <Question key={activeQuestionIndex}
     index={activeQuestionIndex}
     onSelectAnswer={handleSelectAnswer}
     onSkipAnswer={handleSkipAnswer}/>
    </div>
 )

}