import { useRef } from "react";

const DELAY = 500;

export function useDebounce(callee, delay = DELAY) {
  const timerId = useRef();

  return function (...args) {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      callee(...args);
      timerId.current = undefined;
    }, delay);
  };
}
