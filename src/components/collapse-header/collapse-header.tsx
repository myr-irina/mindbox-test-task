import { CaretRightOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import TodoInput from "../todo-input/todo-input";

interface ICollapseHeaderProps {
  expanded: boolean;
  onToggle: () => void;
  onAdd: (text: string) => void;
}

export const CollapseHeader = ({
  expanded,
  onToggle,
  onAdd
}: ICollapseHeaderProps) => {
  return (
    <div className={styles.collapseHeader}>
      <span
        onClick={onToggle}
        className={styles.caret}
        tabIndex={0}
        aria-label="Toggle">
        <CaretRightOutlined rotate={expanded ? 90 : 0} />
      </span>
      <TodoInput onAdd={onAdd} />
    </div>
  );
};
