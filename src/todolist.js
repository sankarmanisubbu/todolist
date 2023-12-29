import react, {useState} from 'react';
import TodoItem from './todoitem.js'
function TodoList() {
    const [tasks, setTasks] = useState([
    {
    id : '',
    text: '',
    completed: ''
    }
    ]);
    
    const [text, setText] = useState('');
   function addTask(text) {
    const newTask = {
    id: Date.now(),
    text,
    completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
    }
   function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
    }
   function toggleCompleted(id) {
    setTasks(tasks.map(task => {
    if (task.id === id) {
    return {...task, completed: !task.completed};
    } else {
    return task;
    } 
    }));
    }
   return (
    <div className="todo-list">
    <input
    type='text'
    value={text}
    onChange={e => setText(e.target.value)} 
    />
   <button onClick={() => addTask(text)}>Add</button>
   <br></br>
   <button>All</button>
   <button>Active</button>
   <button>Completed</button>
    {tasks.map(task => (
    <TodoItem
    key={task.id} 
    task={task}
    deleteTask={deleteTask}
    toggleCompleted={toggleCompleted} 
    />
    ))}
    </div>
    );
   }
   export default TodoList;
   