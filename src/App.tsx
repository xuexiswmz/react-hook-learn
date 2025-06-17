import { useState } from "react";

function App() {
  // 基础用法
  const [num, setNum] = useState(1);

  // 也可以通过传入callback函数来改变状态
  const [num2, setNum2] = useState(() => {
    const num1 = 1 + 2;
    const num2 = 2 + 3;
    return num1 + num2;
  });
  return (
    <>
      {/*
       状态就是变化的数据
       状态的改变会触发重新渲染
       组件内的状态通过useState创建 */}
      <button onClick={() => setNum(num + 1)}>{num}</button>
      <button onClick={() => setNum2(num2 + 1)}>{num2}</button>

      {/* 可以直接传新的值/函数，返回值是新的值，函数的参数是上一次的state */}
      <button onClick={() => setNum2((prevNum) => prevNum + 1)}>{num2}</button>
    </>
  );
}

export default App;
