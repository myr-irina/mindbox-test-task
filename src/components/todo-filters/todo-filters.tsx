import styles from "./styles.module.css";

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
    <div className={styles.wrapper}>
      <span>{itemsLeft} items left</span>
      <div>
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "font-bold" : ""}>
          Все
        </button>
        <button
          onClick={() => setFilter("active")}
          className={filter === "active" ? "font-bold" : ""}>
          Активные
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? "font-bold" : ""}>
          Завершённые
        </button>
      </div>
      <button onClick={onClear} className="text-red-500">
        Удалить завершённые
      </button>
    </div>
  );
};

export default TodoFilters;
