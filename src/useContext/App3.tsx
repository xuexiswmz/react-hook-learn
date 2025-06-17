// 如果子组件使用了memo，那给它传递的对象、函数的props就需要用useMemo和useCallback包裹，防止memo失效
// 如果props使用了useMemo和useCallback，那么子组件就要被memo包裹，不然props变没变都会触发重新渲染
import { memo, useCallback, useEffect, useMemo, useState } from "react";

interface BProps {
  count: number;
  callback: Function;
}

const MemoB = memo(B);

function B(props: BProps) {
  console.log("b component render");

  return <div>{props.count}</div>;
}
// app不断setState触发重新渲染，b组件每两秒也触发重新渲染
// 通过添加memo，只有props改变，才会重新渲染被包裹的组件
// memo结合useMemo和useCallback, memo防止props没变时渲染，useMemo和useCallback防止props的不必要变化
function App() {
  const [, setNum] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);

  // 改变props，重新触发memo渲染
  const [count, setCount] = useState(2);
  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);

  // 使用useCallback，当deps数组不变，始终返回一个function
  // 当deps数组改变，才返回一个新的function
  // memo生效
  const BCallback = useCallback(function () {
    console.log("callback");
  }, []);

  // 使用useMemo，当deps数组不变，始终返回一个值
  // 保存的是值，而不是函数
  const count2 = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      {/* 给b添加一个callback参数，每次都会重新创建function，导致props改变，memo失效 */}
      <MemoB count={count2} callback={BCallback} />
    </div>
  );
}

export default App;
