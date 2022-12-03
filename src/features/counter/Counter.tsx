import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const [varIncrementAmount, setVarIncrementAmount] = useState(0);
  const [varDecrementAmount, setVarDecrementAmount] = useState(0);
  const resetAll = () => {
    setVarIncrementAmount(0);
    setVarDecrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(varIncrementAmount))}>
          Increase by
        </button>
        <input
          type="text"
          value={varIncrementAmount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setVarIncrementAmount(parseInt(e.target.value))
          }
        />
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(decrementByAmount(varDecrementAmount))}>
          Decrease by
        </button>
        <input
          type="text"
          value={varDecrementAmount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setVarDecrementAmount(parseInt(e.target.value))
          }
        />
      </div>
      <button onClick={resetAll}>Reset</button>
    </section>
  );
};

export default Counter;
