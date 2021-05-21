import React, { useReducer } from "react";
import reducer from "./state/reducer";
import { DemoInitialState } from "../state/state";

import {
  incrementCounter,
  decrementCounter,
  setName,
  setAge,
  setActive
} from "./state/actions";

export const Demo2 = () => {
  const [state, dispatch] = useReducer(reducer, DemoInitialState);
  const { count, decrementCount, name, age, active } = state;

  return (
    <>
      <div>
        <button onClick={() => dispatch(incrementCounter())}>Increment</button>
        <label>value is {count}</label>
      </div>
      <div>
        <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
        <label>value is {decrementCount}</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="Your name"
          onChange={(e) => dispatch(setName(e.target.value))}
        />
        <label>Name is {name.toUpperCase()}</label>
      </div>
      <div>
        <input
          type="number"
          placeholder="Your age"
          onChange={(e) => dispatch(setAge(e.target.value))}
        />
        <label>Age is {age}</label>
      </div>
      <div>
        <input
          type="checkbox"
          onChange={(e) => dispatch(setActive(e.target.checked))}
        />
        <label>Is active: {active.toString()}</label>
      </div>
    </>
  );
};
