import { MouseEventHandler, useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import setLocalStorage from "../util/helpers/setLocalStorage";

const useSwitch = (
  valueName: string,
  value: string,
  switcher: Function,
  handler: Function | null
): MouseEventHandler<HTMLDivElement> => {
  const dispatch = useDispatch();
  let newValue = useSelector((state: RootStateOrAny) => state[valueName]);

  useEffect(() => {
    setLocalStorage(valueName, newValue);
    handler && handler(newValue);
  }, [newValue]);

  return () => {
    dispatch(switcher(value));
  };
};

export default useSwitch;
