import TodoInput from "./components/todo-input/todo-input";
import TodoList from "./components/todo-list/todo-list";
import useTodos from "./hooks/use-todos";
import "./index.css";
import styles from "./App.module.css";
import TodoFilters from "./components/todo-filters/todo-filters";
import { useState } from "react";

function App() {
  const { todos, addTodo, toggleTodo, clearCompleted, loading } = useTodos();

  const [filter, setFilter] = useState<"all" | "completed" | "active">("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;

    return true;
  });

  return (
    <div className={styles.container}>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} loading={loading} />
      <TodoFilters
        filter={filter}
        setFilter={setFilter}
        onClear={clearCompleted}
        itemsLeft={todos.filter((t) => !t.completed).length}
      />
    </div>
  );
}

export default App;
