import Hello from './Hello'
import Message from './assets/Message'
import Welcome from './Welcome'

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

        <Welcome></Welcome>
        <Welcome name={"Vittorio"}></Welcome>
        { /* Risposta Props1: Welcome ha un props che di default ha "DefaultName", 
        se poi diamo al nostro props un valore diverso, verrà renderizzato il valore che 
        abbiamo dato noi e non quello di default. */}

        <Welcome name={"Francesco"} age={27}></Welcome>
      </div>
    </>
  )
}

export default App
