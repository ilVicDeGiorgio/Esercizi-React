function UncontrolledLogin() {
    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form)

        formData.forEach((value, key) => {
            console.log(`${key} : ${value}`);
        });
    }

    const handleReset = (event) => {
        event.preventDefault();

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
