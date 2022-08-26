import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, increamentByAmount } from '../features/counter/counterSlice';
import classes from './Counter.module.css';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  // const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      {/* <button onClick={toggleCounterHandler}>Toggle Counter</button> */}

      <button
        onClick={() => dispatch(increment())}
        aria-label="Increament Value"
      >
        Increment +
      </button>

      <button
        onClick={() => dispatch(decrement())}
        aria-label="Decreament Value"
      >
        Decrement -
      </button>

      <br />

      <input
        className={classes.textbox}
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={e => setIncrementAmount(e.target.value)}
      />

      <button
        onClick={() => dispatch(increamentByAmount(Number(incrementAmount) || 0))}
        aria-label="Add Amount"
      >
        Add Amount
      </button>

    </main>
  );
};

export default Counter;
