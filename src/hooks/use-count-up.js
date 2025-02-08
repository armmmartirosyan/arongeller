import { useEffect, useState } from "react";

export function useCountUp(value, enabled) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (enabled) {
      const ms = 2000 / value;

      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= value) {
            clearInterval(interval);
            return prev;
          }

          return ++prev;
        });
      }, ms);
    }
  }, [value, enabled]);

  return count;
}
