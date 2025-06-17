import { useEffect, useRef, useState } from "react";
// 解决方法四：
// 使用 useRef + useEffect
function App() {
  const [count, setCount] = useState(0);
  const updataCount = () => {
    setCount(count + 1);
  };
  // 创建ref对象，保存执行的函数
  const ref = useRef(updataCount);
  // 每次更新的时候，都会把updataCount赋值给ref.current
  // ref.current的值更改不会触发重新渲染
  ref.current = updataCount;

  // 每次count更新的时候，都只执行一次useEffect，保证setInterval不会重置
  useEffect(() => {
    const timer = setInterval(() => {
      // 始终引用最新的count
      ref.current();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div>{count}</div>;
}

export default App;
