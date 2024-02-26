import { useState } from 'react'
import Dice from './components/Dice'
import './App.css'

export default function App() {

  return (
    <main>
    <div className="dice-grid">
        <Dice value= {1} />
        <Dice value= {2} />
        <Dice value= {3} />
        <Dice value= {4} />
        <Dice value= {5} />
        <Dice value= {6} />
        <Dice value= {7} />
        <Dice value= {8} />
        <Dice value= {9} />
        <Dice value= {10} />
    </div>

</main>

  )
}
