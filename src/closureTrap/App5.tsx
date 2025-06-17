import { useState } from "react";
import useInterval from "./useInterval";

function App() {
  const [count, setCount] = useState(0);
  const updataCount = () => {
    setCount(count + 1);
  };

  useInterval(updataCount, 1000);

  return <div>{count}</div>;
}

export default App;
