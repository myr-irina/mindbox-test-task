import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";
import useTodos from "./hooks/use-todos";
import "./index.css";
import styles from "./App.module.css";

function App() {
  const { todos, addTodo, toggleTodo, clearCompleted } = useTodos();
  return (
    <div className={styles.container}>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
