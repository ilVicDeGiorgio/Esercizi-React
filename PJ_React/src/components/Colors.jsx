import Color from "./Color";

function Colors({ colors }) {
    return (
        <ul>
            {colors.map((color, index) => (
                <Color key={index} color={color} />
            ))}
        </ul>
    )
}

export default Colors