import React, { useContext } from 'react'
import { Questions } from '../data';
import { useState } from 'react';
import { QuizContext } from '../Context';

export default function Game() {
  
  const [currentQuest, setCurrentQuest] = useState(0);
  const [userVar, setUserVar] = useState("");
  const {score, setScore, gameState, setGameState} = useContext(QuizContext);

  const [style1, setStyle1] = useState("");
  const [style2, setStyle2] = useState("");
  const [style3, setStyle3] = useState("");
  const [style4, setStyle4] = useState("");


  const variant1 = () => {
    setUserVar("var1");
    setStyle1("active")
    setStyle2("")
    setStyle3("")
    setStyle4("")
  }

  const variant2 = () => {
    setUserVar("var2");
    setStyle1("")
    setStyle2("active")
    setStyle3("")
    setStyle4("")
  }

  const variant3 = () => {
    setUserVar("var3");
    setStyle1("")
    setStyle2("")
    setStyle3("active")
    setStyle4("")
  }

  const variant4 = () => {
    setUserVar("var4");
    setStyle1("")
    setStyle2("")
    setStyle3("")
    setStyle4("active")
  }
  
  const nextQuest = () => {
      if(Questions[currentQuest].answer == userVar) {
        setScore(score + 1);
        setStyle1("")
        setStyle2("")
        setStyle3("")
        setStyle4("")
      }
      setCurrentQuest (currentQuest + 1)
  }
  

  const finishQuest = () => {
    if(Questions[currentQuest].answer == userVar) {
      setScore(score + 1);
      setStyle1("")
        setStyle2("")
        setStyle3("")
        setStyle4("")
    }
    setGameState("endgame")
}

  

  return (
    <div className='field'>
      <h1> { Questions[currentQuest].quest.image } </h1>
    
      <div>
        <button  className={style1} onClick={variant1}> {Questions[currentQuest].var1} </button>
        <button className={style2} onClick={variant2}> {Questions[currentQuest].var2} </button>
        <button className={style3} onClick={variant3}> {Questions[currentQuest].var3} </button>
        <button className={style4} onClick={variant4}> {Questions[currentQuest].var4} </button>
      </div>

      <div> 
        {currentQuest == Questions.length - 1 ? (<button onClick={finishQuest}>Завершити</button>) 
        : 
        (<button onClick={nextQuest}>Далі</button>)}
      </div>
    </div>
  )
}
