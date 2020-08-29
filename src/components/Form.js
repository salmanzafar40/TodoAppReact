import React from "react";

const Form = props => {
    return (
        <form>
            <input type="text" className="todo-input"/>
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"/>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;