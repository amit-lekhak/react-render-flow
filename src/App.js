import { useEffect, useLayoutEffect, useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import "./styles.css";

export default function App() {
  console.log("Component App render");

  useLayoutEffect(() => {
    console.log("Component App use layout effect");

    return () => {
      console.log("Component App use layout effect cleanup");
    };
  });

  useLayoutEffect(() => {
    console.log("Component App use layout effect with empty dep");

    return () => {
      console.log("Component App use layout effect with empty dep cleanup");
    };
  }, []);

  useEffect(() => {
    console.log("Component App use effect");

    return () => {
      console.log("Component App use effect cleanup");
    };
  });

  useEffect(() => {
    console.log("Component App use effect with empty dep");

    return () => {
      console.log("Component App use effect with empty dep cleanup");
    };
  }, []);

  const [state, setState] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Component1 />
      <Component2 />

      <button onClick={() => setState(state + 1)}>Click me</button>
      {console.log("Component app render end")}
    </div>
  );
}
