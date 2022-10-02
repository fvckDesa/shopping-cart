import { useState } from "react";

export default function useLocalStorage(key, initState) {
  const item = localStorage.getItem(key);
  const [state, setState] = useState(item ? JSON.parse(item) : initState);

  return [
    state,
    (value) => {
      setState((prev) => {
        const state = typeof value === "function" ? value(prev) : value;
        localStorage.setItem(key, JSON.stringify(state));
        return state;
      });
    },
  ];
}
