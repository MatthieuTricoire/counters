//Assets import
import logo from "./assets/img/logo.png";

// Components Import
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState([]);
  const [maxCounters, setMaxCounters] = useState(false);

  const addCounter = () => {
    if (counter.length < 3) {
      const newTab = [...counter];
      newTab.push(0);
      setCounter(newTab);
    }
    // } else {
    //   setMaxCounters(!maxCounters);
    // }
    if (counter.length === 2) setMaxCounters(!maxCounters);
  };

  return (
    <>
      <header className="row">
        <img className="header__logo" src={logo} alt="Chronomètre" />
        <h1 className="header__title">React Counter v2</h1>
      </header>

      <main className="main">
        <section className="row">
          <button
            onClick={addCounter}
            className={`btn btn--large ${maxCounters && "btn--disabled"}`}
          >
            Add counter
          </button>
        </section>

        <section className="row">
          {counter.map((elem, index) => (
            <Counter counter={counter} setCounter={setCounter} index={index} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
