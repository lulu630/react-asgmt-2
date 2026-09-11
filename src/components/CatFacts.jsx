import { useEffect, useState } from "react"
import catImg from '../assets/images/cat.png'


function CatFacts() {
    const [facts, setFacts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(()  => {
        async function fetchFacts() {
            try {
                const response = await fetch (
                    'https://catfact.ninja/facts?limit=5'
                )
                
                if (!response.ok) {
                    throw new Error('Failed to fetch cat facts')
                }

                const data = await response.json()

                setFacts(data.data)
                } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
            fetchFacts()
            
        }, [])


    return (
        <section className='cat-section'>
            <h2>Cat Facts</h2>
            {loading && <p>Loading...</p> }
            {error && <p>Error: {error}</p>}
            
            <ol className="facts-list">
                {facts.map((item) => (
                    <li key={item.fact} className="cat-fact">
                        {item.fact}
                    </li>
                ))}
            </ol>
            
            <div className="cat">
                <img
                src={catImg}
                alt=""
                aria-hidden="true"
                />
            </div>
        </section>
    )
    
}

export default CatFacts
