import  loginSlice from "./login/loginSlice";
import  themeSlice from "./themeSlice";
import  userSlice  from "./userSlice";
import langSlice from "./lang/langSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    isLogedin: loginSlice.reducer,
    theme: themeSlice.reducer,
    currentUser: userSlice.reducer,
    lang: langSlice.reducer
  },
});