import style from "./style.module.css";
import type { Todo } from "../../types/types";
import { Checkbox } from "antd";
import cn from "classnames";

interface ITodoItem {
  todo: Todo;
  onToggle: (id: string) => void;
}

const TodoItem = ({ todo, onToggle }: ITodoItem) => {
  const onChange = () => {
    onToggle(todo.id);
  };
  return (
    <li className={cn(style.todoItem, { [style.completed]: todo.completed })}>
      <Checkbox checked={todo.completed} onChange={onChange}>
        {todo.text}
      </Checkbox>
    </li>
  );
};

export default TodoItem;
