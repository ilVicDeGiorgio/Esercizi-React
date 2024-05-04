import { useState } from 'react';
import styles from './styles.module.scss'

function TodoList() {

    const [tasks, setTasks] = useState([]);

    const [inputTask, setInputTask] = useState('');


    const addTask = () => {
        if (inputTask.trim() !== '') {
            setTasks([...tasks, inputTask]);
            setInputTask('');
        }
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className={styles.container}>
            <h1>Lista delle cose da fare</h1>

            <div>
                <input
                    type="text"
                    value={inputTask}
                    onChange={(e) => setInputTask(e.target.value)}
                    placeholder="Inserisci un nuovo compito"
                />
                <button onClick={addTask}>Aggiungi</button>
            </div>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => removeTask(index)}>Rimuovi</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
