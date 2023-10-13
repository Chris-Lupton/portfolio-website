export function RomanCalculator({ blur }) {

    return (
        <section className='project' id={blur}>
            <h1>Roman Calculator</h1>
            <p>A calculator mobile app that uses roman numerals. Built using React Native and Javascript as a short fun project. It can be used to make simple calculations, while also handling fractions, and it will convert any numeral to its decimal value.</p>
            <div className="button-box">
                <a className='project-button' target="_blank" href='https://github.com/Chris-Lupton/roman-calculator'><b>GitHub</b></a>
                <a className='project-button' target="_blank" href='https://roman-numerals-mobile-calculator.netlify.app/'><b>View Site</b></a>
            </div>
        </section>
    )
}