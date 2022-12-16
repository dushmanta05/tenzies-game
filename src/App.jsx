import React from 'react'
import { useState } from 'react';



import Die from './components/Die'

const App = () => {

  const [diceValue, setDiceValue] = React.useState(allNewDice());

  function allNewDice(){
    let array = [];
    for (let index = 0; index < 10; index++) {
      const random = Math.ceil(Math.random() * 6)
      array.push(random)
    }
    return array;
  }
  return (
    <main>
      <div className='dice-container'>
       {diceValue.map(num => <Die value={num}/>)}
      </div>
    </main>
  )
}

export default App