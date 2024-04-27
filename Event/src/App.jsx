// import { useState } from 'react'
// import Hello from './Hello'
// import Message from './assets/Message'
// import Welcome from './Welcome'
// import Age from "./Age"
import Counter from "./Counter"
import Clock from "./Clock"

function App() {
  return (
    <>
      <Counter initialValue={0} incrementValue={1}></Counter>
      <Clock></Clock>
    </>
  )
}

export default App
