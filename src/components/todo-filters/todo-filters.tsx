import { Button } from "antd";
import styles from "./styles.module.css";
import cn from "classnames";

interface ITodoFilters {
  filter: "all" | "active" | "completed";
  setFilter: (f: "all" | "active" | "completed") => void;
  onClear: () => void;
  itemsLeft: number;
}

const TodoFilters = ({
  filter,
  setFilter,
  onClear,
  itemsLeft
}: ITodoFilters) => {
  return (
    <div className={cn(styles.filters, styles.empty)}>
      <span style={{ paddingRight: "1.4rem" }}>{itemsLeft} items left</span>
      <div className={styles.buttons}>
        <Button
          type="text"
          onClick={() => setFilter("all")}
          className={cn(styles.button, {
            [styles["button-bordered"]]: filter === "all"
          })}>
          All
        </Button>
        <Button
          type="text"
          onClick={() => setFilter("active")}
          className={cn(styles.button, {
            [styles["button-bordered"]]: filter === "active"
          })}>
          Active
        </Button>
        <Button
          type="text"
          onClick={() => setFilter("completed")}
          className={cn(styles.button, {
            [styles["button-bordered"]]: filter === "completed"
          })}>
          Completed
        </Button>
      </div>
      <Button
        type="text"
        onClick={onClear}
        className={styles.button}
        style={{ paddingLeft: "1.4rem" }}>
        Clear completed
      </Button>
    </div>
  );
};

export default TodoFilters;
