import { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  // useEffect执行定时器 -> 依赖数组改变 -> 执行清理函数 -> 执行useEffect
  useEffect(() => {
    console.log("effect");
    const timer = setInterval(() => {
      console.log(num);
    }, 1000);

    // 清理上一个定时器
    return () => {
      console.log("clean up");
      clearInterval(timer);
    };
  }, [num]);

  return (
    <button onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</button>
  );
}

export default App;
