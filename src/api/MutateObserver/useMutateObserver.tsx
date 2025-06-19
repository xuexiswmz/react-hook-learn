import { useEffect } from "react";

const defaultOptions: MutationObserverInit = {
  subtree: true,
  childList: true,
  attributeFilter: ["class", "style"],
};

// 监听dom变化
export default function useMutateObserver(
  nodeOrList: HTMLElement | HTMLElement[],
  callback: MutationCallback,
  options: MutationObserverInit = defaultOptions
) {
  useEffect(() => {
    if (!nodeOrList) {
      return;
    }
    // 定义MutationObserver实例
    let instance: MutationObserver;

    const nodeList = Array.isArray(nodeOrList) ? nodeOrList : [nodeOrList];
    // 如果浏览器支持MutationObserver，则创建MutationObserver实例
    if ("MutationObserver" in window) {
      instance = new MutationObserver(callback);
      // 遍历节点或节点列表，对每个节点进行监听
      nodeList.forEach((element) => {
        instance.observe(element, options);
      });
    }
    // 在组件卸载时，清除MutationObserver实例的记录和断开连接
    return () => {
      instance?.takeRecords();
      instance?.disconnect();
    };
  }, [options, nodeOrList]);
}
