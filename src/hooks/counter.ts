import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const addCount = (count: number) => {
    setCounter(count);
  };

  return {
    counter,
    addCount,
  };
};
