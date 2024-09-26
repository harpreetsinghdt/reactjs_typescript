import React, { useRef } from "react";
import cls from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const textVal = inputRef.current!.value;
    if (textVal?.trim().length === 0) {
      // throw error
      return;
    }
    props.onAddTodo(textVal);
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
