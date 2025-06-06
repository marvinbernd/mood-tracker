import { useState } from "preact/hooks";
import "./app.css";
import Home from "./pages/Home";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="container">
      <Home />
    </div>
  );
}
