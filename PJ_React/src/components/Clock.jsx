import { useState, useEffect } from 'react'

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [time]); // Esegue l'effetto solo una volta all'inizio


    return (
        <h2 className='clock'>{time.toLocaleTimeString()}</h2>
    )
}

export default Clock