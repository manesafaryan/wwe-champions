import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, useRef, MutableRefObject } from "react";

import RightSideBar from "./layout/RightSideBar/RightSideBar";
import LeftSideBar from "./layout/LeftSideBar/LeftSideBar";
import Header from "./layout/Header/Header";
import Home from "./pages/Home/Home";
import "./App.css";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import handleUserLogin from "./store/login/operations";
import { I18nProvider, LOCALES } from "./i18n";
import useScroll from "./hooks/useScroll";

export default function Main() {
  let lang: "en" | "fr" = useSelector((state: RootStateOrAny) => state.lang);

  const mainRef: MutableRefObject<HTMLElement | null> = useRef(null);
  const [opacity, setOpacity] = useState(0);
  let position = useScroll(mainRef)

  const dispatch = useDispatch();

  useEffect(() => {
    if (position < 100) {
      setOpacity(position / 100);
    } else setOpacity(1);
  }, []);

  useEffect(() => {
    dispatch(handleUserLogin());
  }, []);

  return (
    <I18nProvider locale={LOCALES[lang]}>
      <Router>
        <div className="main-container">
          <LeftSideBar />
          <Header opacity={opacity} />
          <main className="main" ref={mainRef}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <RightSideBar/>
        </div>
      </Router>
    </I18nProvider>
  );
}