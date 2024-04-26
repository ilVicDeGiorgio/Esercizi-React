import { useState } from 'react'
export default function Counter() {
    const [counter, setCounter] = useState(0)
    const handleClick = () => {
        setCounter(counter + 1)
    }
    return (
        <>
            <h2>{counter}</h2>
            <button onClick={handleClick}>Esercizio State1</button>
        </>

    )
}