import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import setLocalStorage from "../util/helpers/setLocalStorage";

const useSwitch = (valueName, value, slice, handler) => {
  const dispatch = useDispatch();
  let newValue = useSelector((state) => state[valueName]);

  useEffect(() => {
    setLocalStorage(valueName, newValue );
    handler && handler(newValue)
  }, [newValue]);

  return () => {
    dispatch(slice.actions.change(value));
  };
};

export default useSwitch;