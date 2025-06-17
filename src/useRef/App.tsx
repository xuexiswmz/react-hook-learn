import { useEffect, useRef, useState } from "react";

// useRef: 保存dom的引用
function App() {
  // 参数类型：保存的内容的类型
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // ref就是一个又current属性的对象，除了可以保存dom的引用，还可以放别的内容
  const numRef = useRef<number>(0);
  const [, forceRender] = useState(0);
  return (
    <div>
      {/* 通过ref保存input元素的引用，然后在useEffect调用它的focus方法 
          ref的内容是保存在current属性上的 */}
      <input ref={inputRef} />

      {/* 无法触发重新渲染，需要配合useState ，
          不建议使用useRef+useState进行内容的重新渲染，直接用useState或者useReducer就可以
          useRef用来存不是用于渲染的内容 */}
      <button
        onClick={() => {
          numRef.current += 1;
          forceRender(Math.random());
        }}
      >
        {numRef.current}
      </button>
    </div>
  );
}

export default App;
