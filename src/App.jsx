import { useState } from 'react'
import Dice from './components/Dice'
import {nanoid} from "nanoid"
import './App.css'

export default function App() {

  const [dice, setDice] = useState(GenerateDice())

  // New Dice generator
  function GenerateDice() {
    function RandNum(){
      return (Math.ceil(Math.random() * 6))
    }

    const newArray = []
    for (let i = 0; i < 10; i++){
      newArray.push({
        value:RandNum(),
        isLocked: false,
        id: nanoid()
      })
    }
    return newArray
  }


  // roll dice, check if locked
  function handleClick(){
    setDice(prevDice => prevDice.map(die => {
      return die.isLocked ? die : GenerateDice()
    })
    )
  }

  // on Click lock dice - sent in props to component
  function lockDice(id) {
    setDice(prevDice => prevDice.map(die => {
      die.id === id ? console.log(die) : console.log("not same")
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
      <div className="dice-grid">
          {diceElements}
      </div>

      <button className="roll-button"
      onClick={handleClick}>
        Roll
      </button>

    </main>

  )
}
