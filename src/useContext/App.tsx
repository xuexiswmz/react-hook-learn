// useContext 跨任意层组件传递数据
// 函数组件
import { createContext, useContext } from "react";

// 使用createContext创建context-> app()使用xxx.Provider修改它的值 -> 在c（）里面使用useContext获取值
const countContext = createContext(111);

function B() {
  return (
    <div>
      <C />
    </div>
  );
}

function C() {
  const count = useContext(countContext);
  return <h1>context的值:{count}</h1>;
}

function App() {
  return (
    <div>
      <countContext.Provider value={222}>
        <B />
      </countContext.Provider>
    </div>
  );
}

export default App;
