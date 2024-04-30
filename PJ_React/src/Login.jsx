import { useState } from 'react'

function Login({ onLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleCheckbox = () => {
        setIsChecked(!isChecked)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        function onLogin()
    }

    const isDisabled = username === '' || password === '';

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="username" name='username' onChange={handleUsername} />

                <label htmlFor="passsword">Password</label>
                <input type="password" name='password' autoComplete="new-password" onChange={handlePassword} />

                <label htmlFor="checkBox">Checkbox</label>
                <input type="checkbox" name='checkBox' onChange={handleCheckbox} />

                <button onClick={handleSubmit} disabled={isDisabled}>Login</button>
            </form>
        </div>
    )
}

export default Login