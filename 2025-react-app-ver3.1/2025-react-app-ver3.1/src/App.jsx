import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import MySlider from "./component/MySlider";
import MyPanel from "./component/MyPanel";
import MyCalculator from "./component/MyCalculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Logo 區塊 */}
      <header className="logo-header">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>

      {/* 標題 */}
      <main className="main-content">
        <h1 className="main-title">5b1g0010 黃翊恩</h1>

        <section className="card slider-section">
          <h2>我的第一個元件：Slider</h2>
          <div className="sliders">
            <p>R: <MySlider /></p>
            <p>G: <MySlider /></p>
            <p>B: <MySlider /></p>
          </div>
        </section>

        <section className="card panel-section">
          <h2>第二個元件：RGB色彩面板</h2>
          <MyPanel />
        </section>

        <section className="card calculator-section">
          <h2>第三個元件：計算機</h2>
          <MyCalculator />
        </section>

        <section className="card counter-section">
          <button onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </section>
      </main>

    </>
  );
}

export default App;
