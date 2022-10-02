import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = (props) => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
