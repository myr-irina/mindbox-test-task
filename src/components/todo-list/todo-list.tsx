import type { Todo } from "../../types/types";
import TodoItem from "../todo-item/todo-item";
import styles from "./style.module.css";
import { Spin } from "antd";

interface ITodoList {
  todos: Todo[];
  onToggle: (id: string) => void;
  loading: boolean;
}

const TodoList = ({ todos, onToggle, loading }: ITodoList) => {
  if (loading)
    return (
      <ul className={styles.todolist}>
        <li className={styles.loader}>
          <Spin />
        </li>
      </ul>
    );

  return (
    <ul className={styles.todolist}>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
};

export default TodoList;
