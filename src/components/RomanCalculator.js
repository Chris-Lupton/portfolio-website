import { useState } from "react"

export function RomanCalculator({ blur, colour }) {

    const [showCalc, setShowCalc] = useState(false)

    function handleClick(){
        setShowCalc(!showCalc)
    }

    return (
        <section className='project' id={blur}>
            <div className="left-bar" id={colour}></div>
            <h1>Roman Calculator</h1>
            <p className="text">A calculator mobile app that uses roman numerals. Built using React Native and Javascript as a short fun project. It can be used to make simple calculations, while also handling fractions, and it will convert any numeral to its decimal value.</p>
            <div className="button-box">
                <a className='project-button' rel="noreferrer" target="_blank" href='https://github.com/Chris-Lupton/roman-calculator'><b>GitHub</b></a>
                <button className='project-button'  onClick={handleClick}><b>Use Calculator</b></button>
            </div>
            {showCalc&&<div className="video-box"><span style={{display:'flex','flex-direction':'column',width:'fit-content',height:'fit-content'}}>
                    <iframe title='Roman Calculator' id={colour} allow="autoplay" allowfullscreen src="https://roman-numerals-mobile-calculator.netlify.app/" width="425" height="700"></iframe>
                    <button className="video-close" id={colour} onClick={handleClick}>Close</button>
                </span></div>}
        </section>
    )
}