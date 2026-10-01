import { useEffect } from "react";

export function useTypingEffect(
  text: string,
  ref: React.RefObject<HTMLElement>,
  delay: number = 100
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.textContent = ""; // clear first
    let index = 0;

    const interval = setInterval(() => {
      element.textContent += text.charAt(index);
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, ref, delay]);
}