export default function MouseClicker() {

    function handleClick(e) {
        console.log(e.target.name);
    }

    return (
        <button name="one" onClick={handleClick}>Mouse Clicker</button>
    )
}