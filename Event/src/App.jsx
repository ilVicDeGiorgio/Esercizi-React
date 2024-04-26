// import { useState } from 'react'
// import Hello from './Hello'
// import Message from './assets/Message'
// import Welcome from './Welcome'
// import Age from "./Age"
import AlertClock from "./AlertClock"
import Counter from "./Counter"
2

function App() {
  return (
    <>
      <AlertClock handleClick={() => alert(Date())}></AlertClock>
      <Counter></Counter>
    </>
  )
}

export default App
