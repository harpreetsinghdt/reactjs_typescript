import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import cls from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onRmvTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={cls.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRmvTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
