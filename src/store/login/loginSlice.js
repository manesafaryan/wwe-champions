import { createSlice} from "@reduxjs/toolkit";
import getLocalStorage from "../../util/helpers/getLocalStorage";

const initialState = getLocalStorage("isLogedin")
  ? getLocalStorage("isLogedin")
  : false;

 const loginSlice = createSlice({
  name: "isLogedin",
  initialState,
  reducers: {
    login: (state) => state = true,
    logout: (state) => state = false
  },
});

export default loginSlice;