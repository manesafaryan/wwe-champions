import { MutableRefObject, useEffect } from "react";

export default function useScroll(
  ref: MutableRefObject<HTMLElement | null>
): number {
  let position: number = 0;
  const handleScroll = (event: Event) => {
    const target = event.target as HTMLElement;
    position = target.scrollTop;
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return position;
}
