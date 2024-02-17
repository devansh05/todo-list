import Image from "next/image";
import AddTodo from "@/components/AddTodo/AddTodo";
import { TodoProvider } from "../store/todos";
import TodoList from "@/components/TodoList/TodoList";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <TodoProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <h1 className="text-3xl font-bold">Todo List (React + Typescript)</h1>
        <Navbar />
        <AddTodo />
        <TodoList />
      </main>
    </TodoProvider>
  );
}
