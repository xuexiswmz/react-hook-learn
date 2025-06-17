// useLayoutEffect 用法和 useEffect 用法类似

// js执行和渲染是阻塞的，js执行 -> 渲染 -> js执行
// useEffect 的 effect 函数在操作dom之后异步执行，
// 可能在渲染前执行effect，也可能在渲染后执行effect，useEffect的使用可能会导致页面闪动
// useLayoutEffect 的effect执行是同步，会在effect逻辑执行完再渲染，不会导致页面闪动
// 如果effect逻辑执行很久（长任务（>50ms））会阻塞渲染，导致掉帧

// 使用情况：
// 绝大多数情况下使用 useEffect，能避免因为effect逻辑执行时间长导致的页面卡顿（掉帧）
// 闪动情况比较严重使用 useLayoutEffect ，但是要注意effect逻辑的执行时间
import { useLayoutEffect, useState } from "react";

async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(123);
    }, 2000);
  });
  return data;
}

function App() {
  const [num, setNum] = useState(0);

  useLayoutEffect(() => {
    queryData().then((data) => {
      setNum(data);
    });
  }, []);

  return (
    <button onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</button>
  );
}

export default App;
