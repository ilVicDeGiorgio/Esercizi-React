import { useState } from 'react'

export default function Counter({ initialValue, incrementValue }) {
    const [counter, setCounter] = useState(initialValue)
    const handleClick = () => {
        setCounter(counter + incrementValue)
    }
    return (
        <>
            <h2>{counter}</h2>
            <button onClick={handleClick}>Esercizio State1</button>
        </>

    )
}