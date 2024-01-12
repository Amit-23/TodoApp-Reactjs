import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./AddTodo.module.css";
import { useState,useReducer } from "react";
import { useContext } from "react";
// import { TodoItemsContext } from "../store/todo-items-store";


const AddTodo = () => {
  const {addNewItem } = useContext(TodoItemsContext);

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    addNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <TodoItemsContext.Provider>
      <div className="container text-center">
        <div className="row my-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here"
              onChange={handleNameChange}
              value={todoName}
            />
          </div>
          <div className="col-4">
            <input type="date" onChange={handleDateChange} value={dueDate} />
          </div>

          <div className="col-2">
            <button
              type="button"
              className="btn btn-success my-btn"
              onClick={handleAddButtonClicked}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </TodoItemsContext.Provider>
  );
};

export default AddTodo;
