import { useEffect, useReducer, type Reducer } from "react";
// 解决方法二：
// 使用useReducer
// dispatch 一个action 而不是直接引用state，不会形成闭包

interface Action {
  type: "add" | "minus";
  num: number;
}
function reducer(state: number, action: Action) {
  switch (action.type) {
    case "add":
      return state + action.num;
    case "minus":
      return state - action.num;
  }
  return state;
}
function App() {
  const [count, dispatch] = useReducer<Reducer<number, Action>>(reducer, 0);

  useEffect(() => {
    console.log(count);
    setInterval(() => {
      dispatch({ type: "add", num: 1 });
    }, 1000);
  }, []);
  return <div>{count}</div>;
}

export default App;
