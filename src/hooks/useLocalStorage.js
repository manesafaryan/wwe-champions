// import { useEffect } from "react";
// import setColorsValues from "../util/helpers/colorValuesSetter";

// export default function useLocalStorage(initialVal) {
//   get = () => {
//     const theme = localStorage.getItem("theme");
//     if (theme) {
//       return theme;
//     }
//     initialVal;
//   };

//   const [value, setValue] = useState(get());

//   useEffect(() => {
//     setColorsValues(value);
//   }, [value]);
//   return [value, setValue];
// }
