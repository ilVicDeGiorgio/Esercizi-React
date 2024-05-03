import { useState, useEffect, useRef } from 'react';

function Counter({ initialValue, incrementValue }) {
    const [counter, setCounter] = useState(initialValue);
    const countRef = useRef(initialValue);
    const directionRef = useRef('');

    useEffect(() => {
        if (counter !== initialValue) {
            if (counter > countRef.current) {
                directionRef.current = 'su';
            } else if (counter < countRef.current) {
                directionRef.current = 'giù';
            }
            console.log(`Il contatore è cambiato ${directionRef.current}`);
        }
        countRef.current = counter;
    }, [counter, initialValue]);

    const handleClickAdd = () => {
        setCounter(counter + incrementValue);
    };

    const handleClickRemove = () => {
        setCounter(counter - incrementValue);
    };

    const handleClickReset = () => {
        setCounter(initialValue);
    };

    return (
        <>
            <h1>Contatore: {counter}</h1>
            <button onClick={handleClickAdd}>Aggiungi {incrementValue} unità</button>
            <button onClick={handleClickRemove}>Rimuovi {incrementValue} unità</button>
            <button onClick={handleClickReset}>Reset al valore iniziale</button>
        </>
    );
}

export default Counter;
