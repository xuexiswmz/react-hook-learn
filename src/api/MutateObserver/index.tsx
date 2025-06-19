import React, { useLayoutEffect } from "react";
import useMutateObserver from "./useMutateObserver";

interface MutationObserverProps {
  options?: MutationObserverInit;
  onMutate?: (mutations: MutationRecord[], observer: MutationObserver) => void;
  children: React.ReactElement;
}
// 获取ref
const MutateObserver: React.FC<MutationObserverProps> = (props) => {
  const { options, onMutate = () => {}, children } = props;

  const elementRef = React.useRef<HTMLDivElement>(null);

  const [target, setTarget] = React.useState<HTMLElement>();

  // 监听dom变化
  useMutateObserver(target!, onMutate, options);

  // 拿到ref通过setState触发更新
  useLayoutEffect(() => {
    setTarget(elementRef.current!);
  }, []);
  if (!children) {
    return null;
  }
  // 通过React.cloneElement给children添加ref来获取dom节点
  return React.cloneElement(children, { ref: elementRef });
};
export default MutateObserver;
