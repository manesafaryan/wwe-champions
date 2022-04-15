import getLocalStorage from "../../util/helpers/getLocalStorage";
import en from "../../i18n/messages/en";

export const initialLangState = {
  lang: getLocalStorage("lang") ? getLocalStorage("lang") : en,
};
