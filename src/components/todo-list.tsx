import TodoItem from "./todo-item/todo-item";
import type { Todo } from "../types/types";

interface ITodoList {
  todos: Todo[];
}

const TodoList = ({ todos }: ITodoList) => {
  console.log({ todos });
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
