import { useState } from "react";
import useTimeout from "./customHooks/useTimeout";

const App = () => {
  const [state, setState] = useState(1);
  useTimeout(() => {
    setState(state + 1);
  }, 3000);

  return <div>{state}</div>;
};
export default App;
