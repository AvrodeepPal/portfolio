import { useEffect, useRef } from "react";

export function useAutoScroll(dependency, options = {}) {
  const ref = useRef(null);
  const { behavior = "smooth", block = "end", delay = 0 } = options;

  useEffect(() => {
    if (ref.current) {
      const scroll = () => ref.current.scrollIntoView({ behavior, block });
      if (delay) {
        const id = setTimeout(scroll, delay);
        return () => clearTimeout(id);
      } else {
        scroll();
      }
    }
  }, [dependency, behavior, block, delay]);

  return ref;
}
