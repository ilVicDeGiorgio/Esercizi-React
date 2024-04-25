function Welcome({ name = "DefaultName", age }) {
    return (
        <>
            <p>Benvenuto <strong>{name}</strong>!</p>
            <p>La tua età è: {age}</p>
        </>

    )
}

export default Welcome