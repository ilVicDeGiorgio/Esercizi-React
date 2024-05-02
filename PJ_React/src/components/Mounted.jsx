import { useRef, useEffect } from 'react'

function Mounted() {
    const isMounted = useRef(false)
    const message = "Componente montato!"

    useEffect(() => {
        if (!isMounted.current) {
            console.log(message)
            isMounted.current = true;
        }
    }, [])

    return (
        <h1>{message}</ h1>
    )
}

export default Mounted