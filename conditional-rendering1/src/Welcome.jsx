import Age from "./Age"
function Welcome({ name = "DefaultName", age }) {
    return (
        <>
            <p>Benvenuto <strong>{name}</strong>!</p>
            <Age age={age}></Age>
        </>

    )
}

export default Welcome