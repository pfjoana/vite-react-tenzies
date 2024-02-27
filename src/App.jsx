import { useEffect, useState } from 'react'
import Dice from './components/Dice'
import {nanoid} from "nanoid"
import './App.css'

export default function App() {

  const [dice, setDice] = useState(GenerateDice())
  const [finish, setFinish] = useState(false)

  //*** to set Finish
  useEffect(() => {
    const allLocked = dice.every(die => die.isLocked)
    //first to compare
    const firstDie = dice[0].value
    //compare all with the first
    const allEqual = dice.every(die => die.value === firstDie)

    if (allLocked && allEqual) {
      setFinish(true)
    }

  }, [dice])


  //** New individual die generator
  function GenerateOneDie(){
    return {
      value: Math.ceil(Math.random() * 6),
      isLocked: false,
      id: nanoid()
    }
  }

  //*** New 10 Dice generator
  function GenerateDice() {
    const newArray = []
    for (let i = 0; i < 10; i++){
      newArray.push(GenerateOneDie())
    }
    return newArray
  }


  //*** roll dice
  function handleClick(){

    if(!finish) {
      setDice(prevDice => prevDice.map(die => {
        return die.isLocked ? die : GenerateOneDie()
      }))
    } else {
      // re start game
      setFinish(false);
      setDice(GenerateDice())
    }
  }

  // on Click lock dice - sent in props to component
  function lockDice(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? { ...die, isLocked: !die.isLocked } : die
    }))
  }

  // component instances to be displayed
  const diceElements = dice.map(die => (
    <Dice
      key={die.id}
      value={die.value}
      isLocked = {die.isLocked}
      lockDice={() => lockDice(die.id)}
    />
  ))

  return (
    <main>
      <h1>Tenzies</h1>
      <p className="rules">Roll until each die displays identical values. Tap individual dice to lock them in place with their current values before rolling again.</p>
      <div className="dice-grid">
          {diceElements}
      </div>

      <button className="roll-button" onClick={handleClick}>
        {finish ? "New Game" : "Roll"}
      </button>

    </main>

  )
}
