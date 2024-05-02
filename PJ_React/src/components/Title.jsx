import { useState } from 'react'

function Title() {

    const [value, setValue] = useState('')

    function handleChange(e) {
        setValue(e.target.value)
    }

    return (
        <div>
            <h2>{value}</h2>
            <p>{value}</p>
            <input type="text" onChange={handleChange} />
        </div>
    )
}

export default Title