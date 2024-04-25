import Hello from './Hello'
import Message from './assets/Message'

function App() {

  return (
    <>
      <div>
        <Hello></Hello>
        <Hello></Hello>
        <Hello></Hello>
        { /* Risposta Components3: Si posso utilizzare il componente Hello più volte
        e se lo faccio non faccio altro che renderizzare a schermo più volte la 
        stessa cosa, ovvero il contenuto di Hello. */}
        <Message></Message>
        { /* Risposta Components3: Si posso utilizzare il componente Message direttamente
        qui e se lo faccio funziona esattamente come nell'altro caso. */}

      </div>
    </>
  )
}

export default App
