// 无论useState还是useReducer，只要涉及state的修改，就必须返回新对象
// 复杂深层对象的修改推荐immer库，直接修改state，返回新对象
import { produce } from "immer";
import { useReducer } from "react";
import type { Reducer } from "react";
interface Data {
  // 复杂的对象结构，修改其中一个属性需要把其余属性依次复制一遍
  // 使用immutable相关的库进行复杂对象的修改
  a: {
    c: {
      e: number;
      f: number;
    };
    d: number;
  };
  b: number;
}

interface Action {
  type: "add";
  num: number;
}

function reducer(state: Data, action: Action) {
  switch (action.type) {
    case "add":
      // state.result += action.num;
      // return state;
      //直接修改原始state，无法触发重新渲染（useState也是），必须返回一个新对象
      // return { result: state.result + action.num };

      // 使用immer库，可以直接修改state，并且返回一个新的state，触发重新渲染
      // produce第一个参数是要修改的对象，第二个参数的函数里直接修改这个对象的属性，返回一个新的对象
      return produce(state, (state) => {
        state.a.c.e += action.num;
      });

    // 如果对象结构很复杂，每次都创建一个新对象会比较繁琐，性能也不好
    // return {
    //   ...state,
    //   a: {
    //     ...state.a,
    //     c: {
    //       ...state.a.c,
    //       e: state.a.c.e + action.num,
    //     },
    //   },
    // };
  }
  return state;
}

function App() {
  const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(
    reducer,
    "one",
    (param) => {
      return {
        a: {
          c: {
            e: 0,
            f: 0,
          },
          d: 0,
        },
        b: 0,
      };
    }
  );

  return (
    <div>
      {/* 触发add的action */}
      <button onClick={() => dispatch({ type: "add", num: 1 })}>+</button>
      <span>{JSON.stringify(res)}</span>
    </div>
  );
}

export default App;
