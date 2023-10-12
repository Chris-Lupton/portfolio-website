import { Link } from "react-router-dom"
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import React, { useState, useEffect } from 'react'
import { CodewarsIcon } from "./svg";

export function Header ({ colour }) {

  const [color1, setColor1] = useState('')
  const [color2, setColor2] = useState('')

  useEffect(() => {
    if(colour === 'display-blue'){
      setColor1('#00008b')
      setColor2('#9932cc')
    }
    if(colour === 'display-red'){
      setColor1('#b55a0b')
      setColor2('#620d0d')
    }
  }, [colour])

  return (
    <header className="header">
      <div>
        <Link to={'https://www.codewars.com/users/Chris-Lupton'}><CodewarsIcon color1={color1} color2={color2}/></Link>
      </div>
      <div>
        <Link className='icon' to={'https://github.com/Chris-Lupton'} target="_blank"><BsGithub size={35}/></Link>
        <Link className='icon' to={'https://www.linkedin.com/in/christopher--lupton/'} target="_blank"><BsLinkedin size={35}/></Link>
        <Link className='icon' ><BsFillEnvelopeFill size={35}/></Link>
      </div>
    </header>
  )
}