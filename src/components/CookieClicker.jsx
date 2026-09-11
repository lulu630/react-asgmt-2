import { useState} from 'react'
import cookieImg from '../assets/images/cookie.png'
import cookieMonsterImg from '../assets/images/cookie-monster.png'

function CookieClicker() {
    const [points, setPoints] = useState(0)
    return (
        <section className='cookie-section'>
            <h2>Cookie Monster</h2>
            <h3>Total Bites: {points}</h3>
            <button 
            className="cookie-btn"
            type="button"
            onClick={ () => setPoints(points + 1)}
            >
                <img src={cookieImg} alt="Cookie" />
            </button>
            <img 
                className="cookie-monster" 
                src={cookieMonsterImg}
                alt=""
                aria-hidden="true"
            />

        </section>
    )

}

export default CookieClicker
