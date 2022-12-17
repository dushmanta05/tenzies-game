import React from 'react'
import { useState } from 'react';
import { nanoid } from 'nanoid';


import Die from './components/Die'

const App = () => {

  const [diceValue, setDiceValue] = React.useState(allNewDice());

  function generateNewDie(){
      return {value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: nanoid()}
  }
  function allNewDice(){
    let array = [];
    for (let index = 0; index < 10; index++) {
      array.push(generateNewDie())
    }
    return array;
  }
  function rollDice(){
    setDiceValue(oldDiceValue => oldDiceValue.map(obj => obj.isHeld ? obj : generateNewDie()))
  }
  function holdDice(id){
    setDiceValue(oldDiceValue => oldDiceValue.map(obj => obj.id === id ? {...obj, isHeld: !obj.isHeld} : obj))
  }

  const diceElements = diceValue.map(obj => <Die isHeld={obj.isHeld} key={obj.id} value={obj.value} holdDice={() => holdDice(obj.id)} />)

  return (
    <main>
      <div className='dice-container'>
       {diceElements}
      </div>
      <button className='roll-dice' onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App