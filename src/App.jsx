import React from 'react'
import { useState } from 'react';
import { nanoid } from 'nanoid';


import Die from './components/Die'

const App = () => {

  const [diceValue, setDiceValue] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    console.log("Dice state changed")
  }, [diceValue])

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
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
       {diceElements}
      </div>
      <button className='roll-dice' onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App