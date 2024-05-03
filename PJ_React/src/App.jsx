import Colors from "./components/Colors"

function App() {
  const colorsArray = [
    { id: 1, name: 'Rosso' },
    { id: 2, name: 'Verde' },
    { id: 3, name: 'Blu' }
  ];

  return (
    <>
      <h1>Lista colors</h1>
      <Colors colors={colorsArray}></Colors>
    </>
  )
}

export default App
