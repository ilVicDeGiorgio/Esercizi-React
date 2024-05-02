import { useEffect } from 'react'
import { useRef } from 'react'

function FocusableInput() {
    const inputRef = useRef(3)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    return (
        <input type="text" ref={inputRef} />
    )
}

export default FocusableInput