import React, {useState, useEffect} from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        getLocalTodos();
    },[])
    useEffect(() => {
        filterHandler();
        saveToLocalStorage();
    }, [todos, status]);

    const filterHandler = () => {
        switch (status)
        {
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            case "all":
                setFilteredTodos(todos)
                break;
        }
    }

    const saveToLocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null)
        {
            localStorage.setItem('todos', JSON.stringify([]))
        }
        else
        {
            let localTodos = JSON.parse(localStorage.getItem('todos'))
            setTodos(localTodos)
        }
    }

  return (
    <div className="App">
        <header>
            <h1>Salman's Todo List</h1>
        </header>
        <Form inputText={inputText}
              setInputText={setInputText}
              todos={todos}
              setTodos={setTodos}
              setStatus={setStatus}
              filteredTodos={filteredTodos}
              setFilteredTodos={setFilteredTodos}
        />
        <TodoList todos={filteredTodos}
                  setTodos={setTodos}/>
    </div>
  );
}

export default App;
