"use client";
import { ReactNode, createContext, useContext, useState } from "react";

export type TodoProviderProps = { children: ReactNode };

export type Todo = {
  id: string;
  completed: boolean;
  task: string;
  createdAt: Date;
};

export type TodoContext = {
  todos: Todo[];
  handleAddToDo: (task: string) => void; //call signature, when we define type of a function in an object
  toggleTodoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

const todosContext = createContext<TodoContext | null>(null);

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddToDo = (task: string) => {
    setTodos((prevTodo) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prevTodo,
      ];
      return newTodos;
    });
  };

  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newTodos;
    });
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.filter((filterTodo) => filterTodo.id !== id);
      return newTodos;
    });
  };

  return (
    <todosContext.Provider
      value={{ todos, handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo }}
    >
      {children}
    </todosContext.Provider>
  );
};

export const useTodos = () => {
  const todoConsumer = useContext(todosContext);
  if (!todoConsumer) {
    throw new Error("Could not find provider for consumer");
  }

  return todoConsumer;
};
