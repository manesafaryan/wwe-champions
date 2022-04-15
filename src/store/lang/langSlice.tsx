import { createSlice } from "@reduxjs/toolkit";
import { initialLangState } from "./initialState";

const langSlice = createSlice({
  name: "lang",
  initialState: initialLangState,
  reducers: {
    change: (state, action) => (state = action.payload),
  },
});

export default langSlice;
