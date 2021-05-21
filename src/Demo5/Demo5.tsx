import React from "react";
import { useImmer } from "use-immer";

import { DemoInitialState } from "../state/state";

export const Demo5 = () => {
  const [myState, setMyState] = useImmer(DemoInitialState);

  return (
    <>
      <div>
        <button
          onClick={() =>
            setMyState((draft) => {
              draft.count++;
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
            setMyState((draft) => {
              draft.decrementCount--;
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
            setMyState((draft) => {
              draft.name = e.target.value;
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
            setMyState((draft) => {
              draft.age = parseInt(e.target.value, 10);
            })
          }
        />
        <label>Age is {myState.age}</label>
      </div>
      <div>
        <input
          type="checkbox"
          onChange={(e) =>
            setMyState((draft) => {
              draft.active = e.target.checked;
            })
          }
        />
        <label>Is active: {myState.active.toString()}</label>
      </div>
    </>
  );
};
