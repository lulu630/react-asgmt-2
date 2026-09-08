import { useState} from 'react'

function CookieClicker() {
    const [points, setPoints] = useState(0)
    return (
        <section>
            <h2>Cookie Clicker</h2>
            <p>Points: {points}</p>
            <button 
            className="cookie-button"
            type="button"
            onClick={ () => setPoints(points + 1)}
            >
                <img src="/cookie.png" alt="Cookie" />
            </button>
        </section>
    )

}

export default CookieClicker