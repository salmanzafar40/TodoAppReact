import React from "react";

const Todo = ({todo, todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el =>  el.id !== todo.id))
    }

    const completeHandler = (id) => {
        setTodos(
            todos.map(item => {
                if (item.id === id)
                {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            })
        )
    }

    return (
        <div className={'todo'}>
            <li className={'todo-item'}>
                {todo.text}
            </li>
            <button onClick={() => completeHandler(todo.id)}
                    className={`complete-btn ${todo.completed ? 'completed' : ''}`}>
                <i className="fas fa-check"/>
            </button>
            <button onClick={deleteHandler} className={'trash-btn'}>
                <i className="fas fa-trash"/>
            </button>
        </div>
    )
}

export default Todo;