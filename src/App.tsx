import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Terminable from "./Terminable";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
          <Terminable commands={[
            {
              prompt: "# Hey there !",
              output: "....",
            },
            {
              prompt: "# I am TerMinable",
              output: "....",
            },
            {
              prompt: "# Your friendly webpage <<fake it>> terminal",
              output: "what the hell is he saying",
            },
            {
              prompt: "# Noo no, really, I am not a real terminal, I am fake !",
              output: "Sooo, what's your purpose ?",
            },
            {
              prompt: "# Well, I am a fake terminal...",
              output: "....",
            },
          ]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
