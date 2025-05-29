import { useId, useState } from "react";
import type { Todo } from "../types/types";
import { v4 as uuidv4 } from "uuid";

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const id = useId();

  const addTodo = (text: string) => {
    const newTodo = { id: uuidv4(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return {
    todos,
    addTodo,
    clearCompleted,
    toggleTodo
  };
};

export default useTodos;
