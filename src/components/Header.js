import { Link } from "react-router-dom"
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import React, { useState, useEffect } from 'react'
import { CodewarsIcon } from "./svg";

export function Header ({ colour }) {

  const [color1, setColor1] = useState('')
  const [color2, setColor2] = useState('')
  const [isMobile, setIsMobile] = useState(false)
 
  const handleResize = () => {
      if (window.innerWidth < 480) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
  }

  useEffect(() => {
      window.addEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if(colour === 'display-blue'){
      setColor1('#2300af')
      setColor2('#552cb4')
    }
    if(colour === 'display-red'){
      setColor1('#973f09')
      setColor2('#8f2509')
    }
    if(colour === 'display-green'){
      setColor1('#279408')
      setColor2('#77bd08')
    }
    if(colour === 'display-orange'){
      setColor1('#b67e03')
      setColor2('#a09905')
    }
  }, [colour])

  return (
    <header className="header">
      <div>
        <Link to={'https://www.codewars.com/users/Chris-Lupton'}><CodewarsIcon color1={color1} color2={color2} isMobile={isMobile}/></Link>
      </div>
      <div>
        <Link className='icon' to={'https://github.com/Chris-Lupton'} target="_blank"><BsGithub size={isMobile?28:35} /></Link>
        <Link className='icon' to={'https://www.linkedin.com/in/christopher--lupton/'} target="_blank"><BsLinkedin size={isMobile?28:35}/></Link>
        <Link className='icon' to={'mailto:kitlupton@hotmail.com'} ><BsFillEnvelopeFill size={isMobile?28:35}/></Link>
      </div>
    </header>
  )
}