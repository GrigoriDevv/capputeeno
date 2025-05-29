import { useState } from "react";

export function useLocalStorage<T>(items: string) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(items) ?? "")
  );

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(items, JSON.stringify(newValue));
  };

  return { value, updateLocalStorage };
}
