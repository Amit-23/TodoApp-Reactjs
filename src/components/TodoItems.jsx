import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  const {todoItems} = useContext(TodoItemsContext);
  

 


  return (
    <div className={styles.items}>
      {todoItems.map((item) => (
        <TodoItem
        
          name={item.name}
          key={item.name}
          dueDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
