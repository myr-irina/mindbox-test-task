import type { Todo } from "../types/types";

export const data = [
  { id: "1", text: "Тестовое задание", completed: false },
  { id: "2", text: "Прекрасный код", completed: true },
  { id: "3", text: "Покрытие тестами", completed: false }
];

export const fetchTodos = (): Promise<Todo[]> => {
  return new Promise<Todo[]>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
