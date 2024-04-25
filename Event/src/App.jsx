// import Hello from './Hello'
// import Message from './assets/Message'
// import Welcome from './Welcome'
// import Age from "./Age"
import AlertClock from "./AlertClock"

function App() {
  return (
    <>
      <AlertClock handleClick={() => alert(Date())}></AlertClock>
    </>
  )
}

export default App
