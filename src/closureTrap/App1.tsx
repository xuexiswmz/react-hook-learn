import { useEffect, useState } from "react";
// 解决方法一：
// 使用setState的另一种参数，传入一个function，function中可以拿到最新的state
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      //每一次的count都是参数传入的上一次的state
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  return <div>{count}</div>;
}

export default App;
