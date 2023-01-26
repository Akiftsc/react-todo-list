import './App.css';
import { useState } from 'react';
import Task from './Task';

function App() {

  let [todoList, setTodoList] = useState([]);
  let [newTask, setNewTask] = useState("");
  
  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task =  {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isCompleted: false,
    }
    setTodoList([...todoList, task]);
  }
  const deleteTask = (id) => {
    const newTodoList = todoList.filter(task => task.id !== id);
    setTodoList(newTodoList);
  }

  const completeTask = (id) => {
    //TODO Todolist'ten item'i bulup sil. ve yerine yenisini completed değeri değiştirilmiş olarak ekle.
    let theTask = todoList.find(task => task.id === id)
     let newTodoList = todoList.filter(task => task.id !== id); 
     
     theTask.isCompleted = !theTask.isCompleted;
     newTodoList.push(theTask);
     setTodoList(newTodoList);
 
  }


  return (
    <div className="App">
      <h1 className='title'>Day 4 React</h1>

      <div className='addTask'>
        <input type="text" onChange={handleChange} spellCheck="false"/>
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className='list'>
        {todoList.map((todo) => {
             return <Task delFunc={deleteTask} isit={todo.isCompleted} complete={completeTask} taskName={todo.taskName} id={todo.id} />
        })}
      </div>
    </div>
  );
}

export default App;