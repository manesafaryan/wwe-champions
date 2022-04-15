import { RootStateOrAny } from "react-redux";

const langSelector = (state: RootStateOrAny) => {
  state.lang;
};

export const langSel = { langSelector };
