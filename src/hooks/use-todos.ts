import { useEffect, useState } from "react";
import type { Todo } from "../types/types";
import { v4 as uuidv4 } from "uuid";
import { fetchTodos } from "../data/data";

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos().then((fetched) => {
      setTodos(fetched);
      setLoading(false);
    });
  }, []);

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
    toggleTodo,
    loading
  };
};

export default useTodos;
