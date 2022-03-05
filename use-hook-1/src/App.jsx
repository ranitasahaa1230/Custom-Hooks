import { useState } from "react";
import "./styles.css";
import { useDocumentTitle } from "./useDocumentTitle";

export default function App() {
  const [counter, setCounter] = useState(0);

  useDocumentTitle(counter);

  return (
    <div className="App">
      <button onClick={() => setCounter((counter) => counter + 1)}>
        {counter}
      </button>
    </div>
  );
}
