import TodoList from "./components/todo-list/todo-list";
import useTodos from "./hooks/use-todos";
import "./index.css";
import styles from "./App.module.css";
import TodoFilters from "./components/todo-filters/todo-filters";
import { useState } from "react";
import { Collapse, Typography } from "antd";

import { CollapseHeader } from "./components/collapse-header/collapse-header";
const { Title } = Typography;

function App() {
  const { todos, addTodo, toggleTodo, clearCompleted, loading } = useTodos();
  const [activeKey, setActiveKey] = useState(["1"]);

  const [filter, setFilter] = useState<"all" | "completed" | "active">("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className={styles.container}>
      <Title level={1} className={styles.heading}>
        todos
      </Title>
      <Collapse
        collapsible="icon"
        activeKey={activeKey}
        onChange={(key) => setActiveKey(Array.isArray(key) ? key : [key])}
        style={{ backgroundColor: "white", padding: 0 }}
        items={[
          {
            key: "1",
            label: (
              <CollapseHeader
                expanded={activeKey.includes("1")}
                onToggle={() =>
                  setActiveKey(activeKey.includes("1") ? [] : ["1"])
                }
                onAdd={addTodo}
              />
            ),
            children: (
              <TodoList
                todos={filteredTodos}
                onToggle={toggleTodo}
                loading={loading}
              />
            ),
            showArrow: false
          }
        ]}
      />
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
