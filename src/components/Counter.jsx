import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '@store/counter';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(({ counter }) => counter.counter);
  const showCounter = useSelector(({ counter }) => counter.showCounter);
  const toggleCounterHandler = () => dispatch(counterActions.toggle());
  const incrementHandler = () => dispatch(counterActions.increment());
  const increaseHandler = (value) => dispatch(counterActions.increase(value));
  const decrementHandler = () => dispatch(counterActions.decrement());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={incrementHandler} type={'button'}>
          Increment
        </button>
        <button onClick={() => increaseHandler(5)} type={'button'}>
          Increase by 5
        </button>
        <button onClick={decrementHandler} type={'button'}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
