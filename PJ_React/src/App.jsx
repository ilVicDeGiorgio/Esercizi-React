// import { useState } from 'react'
// import Hello from './Hello'
// import Message from './assets/Message'
// import Welcome from './Welcome'
// import Age from "./Age"
// import Counter from "./Counter"
// import Clock from "./Clock"
// import MouseClicker from "./MouseClicker"
// import InteractiveWelcome from "./InteractiveWelcome"
import Login from "./Login"

function App() {

  function onLogin() {
    console.log(username, password)
  }



  return (
    <>
      <Login onLogin={onLogin}></Login>
    </>
  )
}

export default App
