import React, { useEffect, useImperativeHandle, useRef } from "react";
// 通过forwardRef将子组件的ref转发给父组件（组件内的ref转发）

interface RefProps {
  aaa: () => void;
}

// 第一个参数类型是ref的content类型，第二个参数是props的类型
const Parent: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 可以通过useImperativeHandle自定义暴露给父组件的ref属性
  // 第一个参数是传入的ref，第二个是返回新的ref值的函数，第三个是依赖数组
  useImperativeHandle(
    ref,
    () => {
      return {
        aaa() {
          inputRef.current?.focus();
        },
      };
    },
    [inputRef]
  );

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};
// 接收和转发ref
const WrappedParent = React.forwardRef(Parent);

function App() {
  // 把input标签设置到ref
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("ref", ref.current);
    ref.current?.aaa();
  }, []);

  return (
    <div>
      <WrappedParent ref={ref} />
    </div>
  );
}

export default App;
