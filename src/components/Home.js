import { useState } from "react"
import { Project } from './Project'
import { AiOutlineClose } from 'react-icons/ai'

export function Home ({ colour, setColour }) {

  const [display, setDisplay] = useState('')

  function changeProject(e) {
    setDisplay(e.target.value)
    setColour('display-red')
  }

  return (
    <main className="home">
      <div className="top-bar" id={colour}></div>
      <div className="left-bar" id={colour}></div>
      <div className="display">
        <Project display={display} colour={colour} setColour={setColour}/>
        {display && <button id='close-button' onClick={changeProject} value={''}><AiOutlineClose size={26}/></button>}
      </div>

      <div className="projects">
        <h2>Projects</h2>
        <button id={colour} onClick={changeProject} value={'ncnews'}>NC News</button>
        <button id={colour} onClick={changeProject} value={'safejourney'}>Safe Journey</button>
        <button id={colour} onClick={changeProject} value={'romancalculator'}>Roman Calculator</button>
      </div>
      <div className="right-bar" id={colour}></div>
      <div className="bottom-bar" id={colour}></div>
    </main>
  )
}