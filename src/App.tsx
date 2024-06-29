import { FC } from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import NewsContextProvider from "./store/news.context";

const App: FC = () => {
  return (
    <>
      <h1 className={styles.title}>Hacker News</h1>
      <NewsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<h1>Wrong Path</h1>} />
          </Routes>
        </BrowserRouter>
      </NewsContextProvider>
    </>
  );
};

export default App;
