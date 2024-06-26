import Age from "./Age"
function Welcome({ name = "DefaultName", age }) {
    return (
        <>
            <p>Benvenuto <strong>{name}</strong>!</p>
            <Age age={age}></Age>
            <div>
                {age > 18 && <Age age={age} />}
                {age && <Age age={age} />}
                {age > 18 && age < 65 && <Age age={age} />}
                {age > 18 && age < 65 && name === "Jhon" && <Age age={age} />}
            </div>

        </>

    )
}

export default Welcome