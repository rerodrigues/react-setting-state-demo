import "./styles.css";
import { Demo1 } from "./Demo1/Demo1";
import { Demo2 } from "./Demo2/Demo2";
import { Demo3 } from "./Demo3/Demo3";
import { Demo4 } from "./Demo4/Demo4";
import { Demo5 } from "./Demo5/Demo5";

export default function App() {
  return (
    <div className="App">
      <h1>Ways of setting a functional component state in React</h1>

      <h2>useState</h2>
      <section>
        <strong>#1 Approach 1 (multiple useState)</strong>
        <Demo1 />
      </section>

      <h2>useReducer</h2>
      <section>
        <strong>#2 Approach 1 (vanilla, using spread)</strong>
        <Demo2 />
      </section>
      <section>
        <strong>#3 Approach 2 (with Immer)</strong>
        <Demo3 />
      </section>

      <h2>Object as state + useState</h2>
      <section>
        <strong>#4 Approach 1 (vanilla, using spread)</strong>
        <Demo4 />
      </section>
      <section>
        <strong>#5 Approach 2 (with useImmer)</strong>
        <Demo5 />
      </section>
    </div>
  );
}
