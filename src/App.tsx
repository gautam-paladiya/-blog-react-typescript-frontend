import { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import PostPage from "./pages/PostPage";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { IThemeConfig } from "./interface";
import UploadPage from "./pages/UploadPage";

function App() {
  const [theme, setTheme] = useLocalStorage<IThemeConfig>(
    "theme",
    {} as IThemeConfig
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add(theme.mode);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="home" element={<IndexPage />} />
        <Route path="post/:id" element={<PostPage />} />
        <Route path="upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
