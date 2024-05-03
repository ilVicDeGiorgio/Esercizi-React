import { useState } from 'react';

function TodoList() {
    //Definiamo lo stato per la lista dei todo
    const [todos, setTodos] = useState([]);
    //Definiamo lo stato per il valore dell'input
    const [inputValue, setInputValue] = useState('');

    function handleAddTodo() {
        // Aggiungiamo il valore dell'input alla lista dei todo
        if (inputValue !== '') {
            setTodos([...todos, inputValue]);
        }
    }

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    return (
        <div>
            <h2>Lista dei Todo</h2>
            <input type="text" onChange={handleChange} />
            <button onClick={handleAddTodo}>Aggiungi</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
