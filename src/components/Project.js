import { NcNews } from "./NcNews"
import { SafeJourney } from "./SafeJourney"
import { RomanCalculator } from "./RomanCalculator"


export function Project({ display, colour, setColour }) {

    if (display === 'ncnews') {
        setColour('display-orange')
        return <NcNews/>
    }

    if (display === 'safejourney') {
        setColour('display-blue')
        return <SafeJourney colour={colour}/>
    }

    if (display === 'romancalculator') {
        setColour('display-green')
        return <RomanCalculator/>
    }

    else return (
        <section className='project'>
            <h1>Full Stack Developer</h1>
            <p>My name is Christopher Lupton, I'm a junior full-stack developer based in the north-east. I recently graduated the Northcoders 13 week software development bootcamp where we learned Javascript, Node, Express, React, HTML and CSS, as well as test driven development using Jest, and practiced concepts such as pair programming.
            <br></br>
            <br></br>

            This website was built using React.js and CSS, the source code can be viewed on GitHub, along with other projects I have completed.
            </p>
            <div className="button-box">
                <a className='project-button' target="_blank" href=''><b>GitHub</b></a>
            </div>
        </section>
    )
  }