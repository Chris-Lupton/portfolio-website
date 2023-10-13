
export function NcNews({ blur }) {
    
    return (
        <section className='project' id={blur}>
            <h1>Nc News</h1>
            <p>NC News is a social media style website that displays articles and comments, developed during my time on the Northcoders bootcamp. Built using PSQL Express.js React.js and Node.</p>
            <div className="button-box">
                <a className='project-button' target="_blank" href='https://github.com/Chris-Lupton/nc-news-project-front-end'><b>GitHub</b> <small>(Front-end)</small></a>
                <a className='project-button' target="_blank" href='https://github.com/Chris-Lupton/be-nc-news-project'><p><b>GitHub</b> <small>(Back-end)</small></p></a>
                <a className='project-button' target="_blank" href='https://chrisl-nc-news.netlify.app/'><b>View Site</b></a>
            </div>
        </section>
    )
}