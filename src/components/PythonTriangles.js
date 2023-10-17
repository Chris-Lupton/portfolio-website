import { useEffect, useState } from "react"

export function PythonTriangles({ blur, colour }) {

    const [showScript, setShowScript] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
 
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    function handleClick(){
        setShowScript(!showScript)
    }

    return (
        <section className='project' id={blur}>
            <div className="left-bar" id={colour}></div>
            <h1>Sierpiński Triangle</h1>
            <p className="text">I first started coding in Python while learning data analytics and came across the Sierpiński triangle pattern. Using the matplotlib library to create graphs, I wrote a script in Python to genreate this pattern using random numbers. Each point is placed halfway between the current point and any random side of the triangle and the same pattern will always be generated. Try it out and enter your choice of starting coordinates, x and y, between 1 and 99. This is run using PyScript. </p>
            <div className="button-box">
                <a className='project-button'  onClick={handleClick}><b>Try Me</b></a>
                <a className='project-button' rel="noreferrer" target="_blank" href='https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle'><b>Learn More</b></a>
            </div>
            
            {showScript&&!isMobile&&
                <div className="video-box"><span style={{display:'flex','flex-direction':'column',width:'fit-content',height:'fit-content'}}>
                        <iframe title='triangles' id={colour} src="https://chris-lupton.pyscriptapps.com/sierpinski-triangle/latest/" width="710" height="710"></iframe>
                        <button className="video-close" id={colour} onClick={handleClick}>Close</button>
                    </span></div>}

            {showScript&&isMobile&&
                <div className="video-box"><span style={{display:'flex','flex-direction':'column',width:400,height:250, justifyContent:'center'}}>
                <div>Looks like you're on mobile...<br/><br/>Switch to a larger screen to view this application</div>
                <button className="video-close" id={colour} onClick={handleClick}>Close</button>
            </span></div>}
        </section>
    )
}