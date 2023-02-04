const Counter = ({ counter, setCounter, index }) => {
  const increment = () => {
    const newTab = [...counter];
    newTab[index] = newTab[index] + 1;
    setCounter(newTab);
  };

  const decrement = () => {
    const newTab = [...counter];
    newTab[index] = newTab[index] - 1;
    setCounter(newTab);
  };

  const reset = () => {
    const newTab = [...counter];
    newTab[index] = 0;
    setCounter(newTab);
  };
  return (
    <div className="counter colum" key={index}>
      <div className="counter__main row">
        <button
          className={`btn counter__btn__action ${
            counter[index] < 1 && "btn--disabled"
          }`}
          onClick={decrement}
        >
          -
        </button>
        <div className="counter__main__result row">{counter[index]}</div>
        <button
          className={`btn counter__btn__action ${
            counter[index] > 9 && "btn--disabled"
          }`}
          onClick={increment}
        >
          +
        </button>
      </div>
      <div className="counter__reset row">
        <button className="btn btn--large" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
