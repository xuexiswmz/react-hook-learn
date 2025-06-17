import { useEffect, useState } from "react";

//useEffect的回调函数不支持async,需要单独写一个函数
async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(123);
    }, 2000);
  });
  return data;
}

function App() {
  const [num, setNum] = useState(1);
  // 可以在初次渲染后请求数据然后再setState
  // 实现请求数据、定时器等异步逻辑时使用useEffect
  useEffect(() => {
    // test只执行一次，因为[]每次不变
    // [1,2,3]写任意常量都不改变，不会触发effect重新执行
    // [Date.now()] 会变化触发重新执行
    console.log("test");

    queryData().then((data) => {
      setNum(data);
    });
    // 依赖数组，react根据它有无变化来决定是否执行effect函数，没传值就每次都执行
    // 变化 -> 重新执行 ； 不变化 -> 不执行
  }, []);

  return (
    <>
      <button onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</button>
    </>
  );
}

export default App;
