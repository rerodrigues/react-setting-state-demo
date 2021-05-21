import React, { useState } from "react";

export const Demo1 = () => {
  const [count, setCount] = useState(0);
  const [decrementCount, setDecrement] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [active, setActive] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <label>value is {count}</label>
      </div>
      <div>
        <button onClick={() => setDecrement(decrementCount - 1)}>
          Decrement
        </button>
        <label>value is {decrementCount}</label>
      </div>
      <div>
        <input
          type="text"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Name is {name.toUpperCase()}</label>
      </div>
      <div>
        <input
          type="number"
          placeholder="Your age"
          onChange={(e) => setAge(parseInt(e.target.value, 10))}
        />
        <label>Age is {age}</label>
      </div>
      <div>
        <input type="checkbox" onChange={(e) => setActive(e.target.checked)} />
        <label>Is active: {active.toString()}</label>
      </div>
    </>
  );
};
