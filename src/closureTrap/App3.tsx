import { useEffect, useState } from "react";
// 解决方法三（不推荐）：
// 改变useEffect的依赖数组
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);

    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    // [count] count变化的时候重新执行effect，引用的是最新的值
    // 但是因为useEffect里面跑的是定时器，每次都重新跑定时器
    // 导致定时器不是每秒执行一次
  }, [count]);
  return <div>{count}</div>;
}

export default App;
