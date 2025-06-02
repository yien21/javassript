import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MySlider from "./component/rgb-panel/MySlider";
import MyPanel from "./component/rgb-panel/MyPanel";
import MyCalculator from "./component/calculator/MyCalculator";
import TicTacToe from "./component/tic-tac-toe/TicTacToe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="main-content">
      <header className="header">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1 className="main-title">5b1g0010 黃翊恩</h1>
      </header>

      <section className="card slider-section">
        <h2>我的第一個元件：Slider</h2>
        <div className="sliders">
          <div className="slider-row">
            <span className="slider-label">R:</span>
            <MySlider />
          </div>
          <div className="slider-row">
            <span className="slider-label">G:</span>
            <MySlider />
          </div>
          <div className="slider-row">
            <span className="slider-label">B:</span>
            <MySlider />
          </div>
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

      <section className="card ttt-section">
        <h2>第四個元件：井字遊戲</h2>
        <TicTacToe />
      </section>

      <section className="card counter-section">
        <button className="count-btn" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </section>

      <footer>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </footer>
    </main>
  );
}

export default App;