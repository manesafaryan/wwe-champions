import { useState, useEffect } from "react";

export default function useToggle(initalVal, ref) {
  const [open, setOpen] = useState(initalVal)

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return [open, setOpen]
}