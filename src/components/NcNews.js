
export function NcNews({ blur, colour }) {
    
    return (
        <section className='project' id={blur}>
            <div className="left-bar" id={colour}></div>
            <h1>NC News</h1>
            <p className="text">NC News is a social media style website that displays articles, and comments for different users, developed during my time on the Northcoders bootcamp. You can filter articles by topic, date or popularity. It was designed with a mobile first approach and styled with CSS to make it fully responsive for all screens. Special care was taken to make it as accessable as possible.
            <br/>
            <br/>
            PSQL | Express | React | Node</p>
            <div className="button-box">
                <a className='project-button' target="_blank" href='https://github.com/Chris-Lupton/nc-news-project-front-end'><b>GitHub</b> <small>(Front-end)</small></a>
                <a className='project-button' target="_blank" href='https://github.com/Chris-Lupton/be-nc-news-project'><p><b>GitHub</b> <small>(Back-end)</small></p></a>
                <a className='project-button' target="_blank" href='https://chrisl-nc-news.netlify.app/'><b>View Site</b></a>
            </div>
        </section>
    )
}