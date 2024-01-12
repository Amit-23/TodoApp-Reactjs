import React from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";


const TodoItem = ({ name, dueDate}) => {
  const {deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{dueDate}</div>

        <div className="col-2">
          <button type="button" className="btn btn-danger my-btn" onClick={()=>deleteItem(name)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
