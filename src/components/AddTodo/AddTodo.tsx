"use client";
import { useTodos } from "@/store/todos";
import React, { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddToDo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        className="text-black"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddTodo;
