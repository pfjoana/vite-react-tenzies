import { useState } from 'react'
import Dice from './components/Dice'
import {nanoid} from "nanoid"
import './App.css'

export default function App() {

  const [dice, setDice] = useState(GenerateDice())

  function GenerateDice() {

    function RandNum(){
      return (Math.ceil(Math.random() * 6))
    }

    const newArray = []
    for (let i = 0; i < 10; i++){
      newArray.push({
        value:RandNum(),
        isLocked:false,
        id: nanoid()
      })
    }
    return newArray
  }


    function handleClick(){
      setDice(GenerateDice())
    }

    const diceElements = dice.map(element => <Dice key={element.id} value={element.value}/>)

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
