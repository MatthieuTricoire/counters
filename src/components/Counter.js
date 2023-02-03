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
  return (
    <div className="counter">
      <button className="btn counter__btn" onClick={decrement}>
        -
      </button>
      <div className="counter__result">{counter}</div>
      <button className="btn counter__btn" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
