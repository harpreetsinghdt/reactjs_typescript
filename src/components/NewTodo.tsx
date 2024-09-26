import React, { useContext, useRef } from "react";
import cls from "./NewTodo.module.css";
import { TodosContext } from "../store/Context";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const textVal = inputRef.current!.value;
    if (textVal?.trim().length === 0) {
      // throw error
      return;
    }
    todoCtx.addTodo(textVal);
  };
  return (
    <form onSubmit={submitHandler} className={cls.form}>
      <label htmlFor="text">Todo Text</label>
      <input id="text" type="text" ref={inputRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
