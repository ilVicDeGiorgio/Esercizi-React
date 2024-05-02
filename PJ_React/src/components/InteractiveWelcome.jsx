import { useState } from 'react'
import Welcome from './Welcome'

function interactiveWelcome() {
    const [name, setName] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }


    return (
        <div>
            <form>
                <input type="text" name='name' onChange={handleName} />
                <Welcome name={name} ></Welcome>
            </form>

        </div>
    )
}

export default interactiveWelcome;