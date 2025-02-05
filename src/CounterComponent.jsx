import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterComponent = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        style={styles.button}
      >
        +1
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        style={styles.button}
      >
        -1
      </button>
    </div>
  );
};

const styles = {
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "20px",
    cursor: "pointer",
  },
};

export default CounterComponent;
