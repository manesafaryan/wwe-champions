import { useState, useEffect, MutableRefObject } from "react";

export default function useToggle(
  initalVal: boolean,
  ref: MutableRefObject<HTMLLIElement | null | HTMLDivElement>
): [boolean, Function] {
  const [open, setOpen] = useState(initalVal);

  const handleClickOutside = (event: { target: EventTarget | null }) => {    
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  console.log(open);
  

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return [open, setOpen];
}
