import { useState } from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [checkBox, setCheckbox] = useState(true)

    const handleUsername = (event) => {
        event.preventDefault()
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const object = {
            username,
            password,
        }

        console.log(object)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="username" name='username' onChange={handleUsername} />

                <label htmlFor="passsword">Password</label>
                <input type="password" name='password' autoComplete="new-password" onChange={handlePassword} />

                <label htmlFor="checkBox">Checkbox</label>
                <input type="checkbox" name='checkBox' />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login