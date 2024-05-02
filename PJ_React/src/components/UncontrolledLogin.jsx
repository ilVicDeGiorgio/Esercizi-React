function UncontrolledLogin() {
    const handleLogin = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password');
        const isChecked = event.target.checkBox.checked;

        const userData = {
            username,
            password,
            isChecked,
        }

        console.log(userData);
    }

    const handleReset = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password');
        const isChecked = event.target.checkBox.checked;


        const form = event.target;

        // Iteriamo su tutti i campi del modulo e reimpostiamo i loro valori
        for (const field of form.elements) {
            if (field.tagName === 'INPUT' && field.type !== 'submit' && field.type !== 'reset') {
                if (field.type === 'checkbox') {
                    field.checked = false;
                } else {
                    field.value = '';
                }
            }
        }

        const userData = {
            username,
            password,
            isChecked
        }

        console.log(userData)
    }

    return (
        <div>
            <form onSubmit={handleLogin} onReset={handleReset}>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' />

                <label htmlFor="password">Password</label>
                <input type="password" name='password' autoComplete="new-password" />

                <label htmlFor="checkBox">Checkbox</label>
                <input type="checkbox" name='checkBox' />

                <button type="submit">Login</button>
                <button type="reset">Reset</button>
            </form>
        </div >
    )
}

export default UncontrolledLogin;
