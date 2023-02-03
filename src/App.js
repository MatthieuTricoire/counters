// Components Import
import { useState } from "react";
import "./App.css";

import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState([]);

  const addCounter = () => {
    let id = counter.length;
    console.log(id);
    if (id < 3) {
      const newTab = [...counter];
      newTab.push(0);
      setCounter(newTab);
      <Counter counter={counter} setCounter={setCounter} id={id} />;
    } else {
      alert("max 3 counters");
    }
  };

  return (
    <div className="main">
      <button onClick={addCounter}>Add counter</button>
    </div>
  );
}

export default App;
