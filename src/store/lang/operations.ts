import langSlice from "./langSlice";

const changeTheLang = (lang: "en" | "fr") => {
  const { change } = langSlice.actions;
  return (dispatch: Function) => {
    dispatch(change(lang));
  };
};

export const langOps = { changeTheLang };
