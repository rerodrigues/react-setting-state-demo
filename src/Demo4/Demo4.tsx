import React, { useState } from "react";

import { DemoInitialState } from "../state/state";

export const Demo4 = () => {
  const [myState, setMyState] = useState(DemoInitialState);

  return (
    <>
      <div>
        <button
          onClick={() =>
            setMyState({
              ...myState,
              count: myState.count + 1
            })
          }
        >
          Increment
        </button>
        <label>value is {myState.count}</label>
      </div>
      <div>
        <button
          onClick={() =>
            setMyState({
              ...myState,
              decrementCount: myState.decrementCount - 1
            })
          }
        >
          Decrement
        </button>
        <label>value is {myState.decrementCount}</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="Your name"
          onChange={(e) =>
            setMyState({
              ...myState,
              name: e.target.value
            })
          }
        />
        <label>Name is {myState.name.toUpperCase()}</label>
      </div>
      <div>
        <input
          type="number"
          placeholder="Your age"
          onChange={(e) =>
            setMyState({
              ...myState,
              age: parseInt(e.target.value, 10)
            })
          }
        />
        <label>Age is {myState.age}</label>
      </div>
      <div>
        <input
          type="checkbox"
          onChange={(e) =>
            setMyState({
              ...myState,
              active: e.target.checked
            })
          }
        />
        <label>Is active: {myState.active.toString()}</label>
      </div>
    </>
  );
};
