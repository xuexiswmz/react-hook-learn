import { forwardRef, useEffect, useImperativeHandle, useMemo } from "react";
import { createPortal } from "react-dom";

// 定义Portal组件的props接口
export interface PortalProps {
  attach: HTMLElement | string;
  children: React.ReactNode;
}
// 定义Portal组件
const Portal = forwardRef((props: PortalProps, ref) => {
  // 解构props中的attach和children
  const { attach = document.body, children } = props;

  // 使用useMemo创建一个容器元素
  const container = useMemo(() => {
    const el = document.createElement("div");
    el.className = `portal-wrapper`;
    return el;
  }, []);

  // 使用useEffect将容器元素添加到attach元素中，并在组件卸载时移除
  useEffect(() => {
    const parentElement = getAttach(attach);
    parentElement?.appendChild(container);
    return () => {
      parentElement?.removeChild(container);
    };
  }, [container, attach]);

  // 使用useImperativeHandle将容器元素暴露给父组件
  useImperativeHandle(ref, () => container);
  // 使用createPortal将children渲染到容器元素中
  return createPortal(children, container);
});

// 定义获取attach元素的函数
export function getAttach(attach: PortalProps["attach"]) {
  // 如果attach是字符串，则通过querySelector获取元素
  if (typeof attach === "string") {
    return document.querySelector(attach);
  }
  // 如果attach是HTMLElement实例，则直接返回
  if (typeof attach === "object" && attach instanceof window.HTMLElement) {
    return attach;
  }
  // 默认返回body元素
  return document.body;
}

// 导出Portal组件
export default Portal;
