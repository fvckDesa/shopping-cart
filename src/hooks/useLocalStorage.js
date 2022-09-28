import { useState } from "react";

export default function useLocalStorage(key, initState) {
  const [state, setState] = useState(initState);

  return [
    state,
    (value) => {
      setState(value);
      localStorage.setItem(key, state);
    },
  ];
}
