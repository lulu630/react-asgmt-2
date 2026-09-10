import { useState} from 'react'

function CookieClicker() {
    const [points, setPoints] = useState(0)
    return (
        <section className='cookie-section'>
            <h2>Cookie Monster</h2>
            <h3>Total Bites: {points}</h3>
            <button 
            className="cookie-button"
            type="button"
            onClick={ () => setPoints(points + 1)}
            >
                <img src="/cookie.png" alt="Cookie" />
            </button>
            <img 
                className="cookie-monster" 
                src="/cookie-monster.png"
                alt=""
                aria-hidden="true"
            />

        </section>
    )

}

export default CookieClicker