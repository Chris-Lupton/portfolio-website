import { useState } from "react"

export function SafeJourney({ colour }) {
    
    const [showVideo, setShowVideo] = useState(false)

    function playVideo(){
        setShowVideo(!showVideo)
    }

    return (
        <section className='project'>
            <h1>Safe Journey</h1>
            <p>Safe Journey is a mobile app developed as part of a team during the Northcoders bootcamp. It allows you to share your location and journey plans with your friends, who can track you and receive notifications in real time. Built using React Native, Express.js and MongoDB</p>
            <div className="button-box">
                <a className='project-button' target="_blank" rel="noreferrer" href='https://github.com/Chris-Lupton/SafeJourney'><b>GitHub</b> <small>(Front-end)</small></a>
                <a className='project-button' target="_blank" rel="noreferrer" href='https://github.com/Chris-Lupton/BE-SafeJourney'><p><b>GitHub</b> <small>(Back-end)</small></p></a>
                <a className='project-button'  onClick={playVideo}><b>Presentation</b></a>
            </div>
            {showVideo&&<div className="video-box"><span style={{display:'flex','flex-direction':'column',width:'fit-content',height:'fit-content'}}>
                    <iframe title='safeJourney' id={colour} allow="autoplay;" allowfullscreen src="https://clipchamp.com/watch/GNvttaH0by6/embed" width="768" height="432"></iframe>
                    <button id={colour} onClick={playVideo}>Close</button>
                </span></div>}
        </section>
    )
}