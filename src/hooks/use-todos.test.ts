import { renderHook, act, waitFor } from "@testing-library/react";
import useTodos from "./use-todos";

jest.mock("uuid", () => ({
  v4: () => "test-uuid"
}));

jest.mock("./../data/data.ts", () => ({
  fetchTodos: () =>
    Promise.resolve([
      { id: "1", text: "Тестовое задание", completed: false },
      { id: "2", text: "Прекрасный код", completed: true },
      { id: "3", text: "Покрытие тестами", completed: false }
    ])
}));

describe("useTodos", () => {
  it("загружает todos при монтировании", async () => {
    const { result } = renderHook(() => useTodos());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.todos).toHaveLength(3);
    expect(result.current.todos[0].text).toBe("Тестовое задание");
  });

  it("добавляет новую задачу", async () => {
    const { result } = renderHook(() => useTodos());
    await waitFor(() => expect(result.current.loading).toBe(false));

    act(() => {
      result.current.addTodo("Новая задача");
    });

    expect(result.current.todos[0]).toEqual({
      id: "test-uuid",
      text: "Новая задача",
      completed: false
    });
  });

  it("переключает completed у задачи", async () => {
    const { result } = renderHook(() => useTodos());
    await waitFor(() => expect(result.current.loading).toBe(false));

    const targetId = result.current.todos[0].id;

    act(() => {
      result.current.toggleTodo(targetId);
    });

    expect(result.current.todos[0].completed).toBe(true);
  });

  it("очищает завершённые задачи", async () => {
    const { result } = renderHook(() => useTodos());
    await waitFor(() => expect(result.current.loading).toBe(false));

    act(() => {
      result.current.clearCompleted();
    });

    expect(result.current.todos.some((t) => t.completed)).toBe(false);
    expect(result.current.todos).toHaveLength(2);
  });
});
