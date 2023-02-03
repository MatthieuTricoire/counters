const Counter = ({ counter, setCounter, id }) => {
  const increment = () => {
    const newTab = [...counter];
    newTab[id] = newTab[id] + 1;
    setCounter(newTab);
  };

  const decrement = () => {
    const newTab = [...counter];
    newTab[id] = newTab[id] - 1;
    setCounter(newTab);
  };
  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <div className="result">{counter[id]}</div>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
