"use client";
import { useTodos } from "@/store/todos";
// import { useRouter } from 'next/router';
import React from "react";

const TodoList = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  // const router = useRouter();
  const filterData = todos;
  // const queryParamValue = router.query.myQueryParam;

  return (
    <ul>
      {filterData.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              name=""
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />
            <label htmlFor="">{todo.task}</label>
            {todo.completed && (
              <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                Done
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
