import { useEffect, useState, type RefObject } from "react";

export interface Options {
  onEnter?: () => void;
  onLeave?: () => void;
  onChange?: (isHovering: boolean) => void;
}

const useHover = (ref: RefObject<HTMLElement>, options?: Options): boolean => {
  const { onEnter, onLeave, onChange } = options || {};

  const [isEnter, setIsEnter] = useState<boolean>(false);

  useEffect(() => {
    ref.current?.addEventListener("mouseenter", () => {
      onEnter?.();
      setIsEnter(true);
      onChange?.(true);
    });

    ref.current?.addEventListener("mouseleave", () => {
      onLeave?.();
      setIsEnter(false);
      onChange?.(false);
    });
  }, [ref]);

  return isEnter;
};
export default useHover;
