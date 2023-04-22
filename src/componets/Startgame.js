import React from 'react'
import { QuizContext } from '../Context'
import { useContext } from 'react'
import { useState } from 'react';


export default function Startgame() {

    const {gameState, setGameState} = useContext(QuizContext)

    const [style1, setStyle1] = useState("");
    
    const start = () => {
      setStyle1("active");
      setTimeout(() => {setGameState("game")}, 200); 
    }

  return (
    <div className='field'>

      <button className={style1} onClick={start}>Почати тест</button>
    </div>
  )
}
