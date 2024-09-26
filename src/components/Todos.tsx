import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import cls from "./Todos.module.css";

import { TodosContext } from "../store/Context";

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={cls.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
