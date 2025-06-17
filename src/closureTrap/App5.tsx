// 封装一个useInterval处理闭包
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

// 传入fn和delay
function useInterval(fn: Function, delay?: number | null) {
  // 保存并更新每次的函数
  const callbackFn = useRef(fn);
  // 更新ref.current的值
  // dom操作完成之后同步执行，比useEffect早
  // 使用useLayoutEffect包裹函数，防止在渲染的时候改变ref.current的值
  useLayoutEffect(() => {
    callbackFn.current = fn;
  });
  let cleanUpFnRef = useRef<Function>();
  // 使用useCallback包裹返回的函数，
  // 返回函数可能作为参数传入别的组件，避免该参数的变化
  // 可以配合memo减少没必要的渲染
  const clean = useCallback(() => {
    cleanUpFnRef.current?.();
  }, []);
  // 定时器只执行一次，但是delay变化的话会重新执行
  useEffect(() => {
    const timer = setInterval(() => callbackFn.current(), delay || 0);
    cleanUpFnRef.current = () => {
      clearInterval(timer);
    };
    // 返回clean函数在组件销毁的时候自动调用清除定时器
    return clean;
  }, []);
  return clean;
}
function App() {
  const [count, setCount] = useState(0);
  const updataCount = () => {
    setCount(count + 1);
  };

  useInterval(updataCount, 1000);

  return <div>{count}</div>;
}

export default App;
