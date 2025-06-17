import { useState, type ChangeEvent } from "react";

// 每一次输入都会setValue，导致组件重新渲染
// 非受控模式下之会渲染一次
// 使用场景：
// 1. 需要对输入的值做处理之后设置到表单的时候
// 2. 想实时同步状态值到父组件
function App() {
  const [value, setValue] = useState("");
  console.log("render");
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setValue(event.target.value);
  }
  return <input value={value} onChange={onChange} />;
}

export default App;
