import style from "./style.module.css";
import type { Todo } from "../../types/types";
import { Typography } from "antd";

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <li className={style.wrapper}>
      <Typography.Text>{todo.text}</Typography.Text>
    </li>
  );
};

export default TodoItem;
