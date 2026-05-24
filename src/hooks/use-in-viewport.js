import { useEffect, useState } from "react";

export function useInViewport(targetRef) {
  const [isVisible, setIsVisible] = useState(0);

  useEffect(() => {
    const target = targetRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(target);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [targetRef]);

  return isVisible;
}
