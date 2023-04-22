import React from 'react'
import  { useContext } from 'react'
import { Questions } from '../data';
import { useState } from 'react';
import { QuizContext } from '../Context';


export default function Endgame() {

  const {score, setScore, gameState, setGameState} = useContext(QuizContext);

  const restart = () => {
    setScore(0);
    setGameState("startgame");
  }

  return (
   <div className='field'>
      <h1>Тест завершено</h1>
      <p>{score} із {Questions.length}</p>

    

    {score > 8 ? (<p>Ваш результат: відмінно.</p>) : score < 8 &&  score > 5 ? (<p>Ваш результат: добре.</p>) :
    (<p>Ваш результат: погано.</p>)
  }


      <div>
          <button onClick={restart}>Спробувати ще раз</button>
      </div>
   </div> 
  )
}
