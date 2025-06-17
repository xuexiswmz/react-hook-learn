// useContext 跨任意层组件传递数据
// class组件使用Consumer来取值，函数组件使用useContext来取值
import { Component, createContext } from "react";

// 使用createContext创建context-> app()使用xxx.Provider修改它的值 -> 在c（）里面使用useContext获取值
const countContext = createContext(111);

class Bbb extends Component {
  render() {
    return <h1>context的值:{this.props.count}</h1>;
  }
}

function App() {
  return (
    <div>
      <countContext.Consumer>
        {(count) => <Bbb count={count} />}
      </countContext.Consumer>
    </div>
  );
}

export default App;
