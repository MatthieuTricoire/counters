// Components Import
import { useState } from "react";
import "./App.css";

import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState([]);

  const addCounter = () => {
    if (counter.length < 3) {
      const newTab = [...counter];
      newTab.push(0);
      setCounter(newTab);
    } else {
      alert("max 3 counters");
    }
  };

  return (
    <div className="main">
      <button onClick={addCounter} className="btn">
        Add counter
      </button>
      {counter.map((elem, index) => {
        <Counter counter={counter} setCounter={setCounter} index={index} />;
      })}
    </div>
  );
}

export default App;
