//当修改state的逻辑比较复杂，用useReducer
//当state比较简单，用useState
//用useState需要在每个地方都写一遍setRes逻辑
//用useReducer只需要把它封装到reducer里面，然后dispatch一个action，用action触发reducer
import { useReducer, useState } from "react";
import type { Reducer } from "react";
interface Data {
  result: number;
}

interface Action {
  type: "add" | "minus";
  num: number;
}

function reducer(state: Data, action: Action) {
  switch (action.type) {
    case "add":
      return { result: state.result + action.num };
    case "minus":
      return { result: state.result - action.num };
  }
  return state;
}

function App() {
  //类型参数 Reducer<Data, Action> 中的 Data 是 state 的类型，Action 是 action 的类型
  //useReducer 第一个参数是reducer 第二个参数是初始值0
  // const [res, dispatch] = useReducer<Reducer<Data, Action>>(reducer, {
  //   result: 0,
  // });

  //通过函数来创建初始数据，第二个参数就是传给这个函数的参数,在参数类型传入它的类型
  const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(
    reducer,
    "one",
    (param) => {
      return {
        result: param === "one" ? 1 : 0,
      };
    }
  );

  //使用useState实现
  // const [res, setRes] = useState({ result: 0 });
  return (
    <div>
      {/* 触发add的action */}
      <button onClick={() => dispatch({ type: "add", num: 1 })}>+</button>
      {/* 触发minus的action */}
      <button onClick={() => dispatch({ type: "minus", num: 1 })}>-</button>
      <span>{res.result}</span>

      {/* 使用useState实现 */}
      {/* <button onClick={() => setRes({ result: res.result + 1 })}>
        useState +
      </button>
      <button onClick={() => setRes({ result: res.result - 1 })}>
        useState -
      </button> */}
    </div>
  );
}

export default App;
