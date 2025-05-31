import type { Todo } from "../../types/types";
import TodoItem from "../todo-item/todo-item";
import styles from "./style.module.css";

interface ITodoList {
  todos: Todo[];
  onToggle: (id: string) => void;
}

const TodoList = ({ todos, onToggle }: ITodoList) => {
  return (
    <ul className={styles.todolist}>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
};

export default TodoList;
