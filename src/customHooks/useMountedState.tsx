import { useCallback, useEffect, useRef } from "react";

export default function useMountedState(): () => boolean {
  const MountedRef = useRef<boolean>(false);

  // 使用useCallBack包裹，防止用它作为其他memo组件参数的时候组件额外渲染
  const get = useCallback(() => MountedRef.current, []);

  useEffect(() => {
    MountedRef.current = true;
    return () => {
      MountedRef.current = false;
    };
  }, []);
  return get;
}
