import { useEffect, useState } from "react";
import useMountedState from "./customHooks/useMountedState";

function App() {
  const isMounted = useMountedState();
  const [, setNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setNum(1);
    }, 1000);
  }, []);

  return <div>{isMounted() ? "Mounted" : "Pending"}</div>;
}

export default App;
