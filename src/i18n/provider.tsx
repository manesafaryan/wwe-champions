import React, { Fragment, FunctionComponent } from "react";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./locales";
import messages from "./messages";

interface Iprops {
  children: JSX.Element,
  locale: string
}

const Provider: FunctionComponent<Iprops> = ({ children, locale = LOCALES.en }) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
    children={children}
  ></IntlProvider>
);

export default Provider;
