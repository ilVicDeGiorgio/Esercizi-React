import { useState } from 'react'

function Login() {
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

    const handleLogin = (event) => {
        event.preventDefault()

        const userData = {
            username,
            password,
            isChecked,
        }

        console.log(userData)
    }

    const handleReset = () => {
        setUsername('')
        setPassword('')
        setIsChecked(false)
    }

    const isDisabled = username === '' || password === '';

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input type="username" name='username' onChange={handleUsername} />

                <label htmlFor="passsword">Password</label>
                <input type="password" name='password' autoComplete="new-password" onChange={handlePassword} />

                <label htmlFor="checkBox">Checkbox</label>
                <input type="checkbox" name='checkBox' onChange={handleCheckbox} />

                <button type="submit" disabled={isDisabled}>Login</button>
                <button onClick={handleReset}>Reset</button>
            </form>
        </div >
    )
}

export default Login