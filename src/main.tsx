import { render } from "preact";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Journal from "./pages/Journal.tsx";
import Home from "./pages/Home.tsx";
import { EntriesProvider } from "./context/MoodContext.tsx";

render(
  <EntriesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </BrowserRouter>
  </EntriesProvider>,
  document.getElementById("app")!
);
