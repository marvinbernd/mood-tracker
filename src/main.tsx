import { render } from "preact";
import "./index.css";
import { App } from "./app.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Journal from "./pages/Journal.tsx";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/journal" element={<Journal />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("app")!
);
