import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log(count);
      setCount(count + 1);
    }, 1000);
    // 依赖数组[]，只会执行并保留第一次的function
    // 形成闭包，导致每次执行定时器时，都在count=0上+1
  }, []);
  return <div>{count}</div>;
}

export default App;
