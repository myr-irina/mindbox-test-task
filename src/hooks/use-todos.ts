import { useId, useState } from "react";
import type { Todo } from "../types/types";

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const id = useId();

  const addTodo = (text: string) => {
    const newTodo = { id: id, text, completed: false };
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
