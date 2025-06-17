import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type SetStateAction,
} from "react";
import type React from "react";

function useMergeState<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T;
    value?: T;
    onChange?: (value: T) => void;
  }
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const { defaultValue, value: propsValue, onChange } = props || {};
  const isFirsrRender = useRef(true);

  const [stateValue, setStateValue] = useState<T>(() => {
    if (propsValue !== undefined) {
      return propsValue!;
    } else if (defaultValue !== undefined) {
      return defaultValue!;
    } else {
      return defaultStateValue;
    }
  });

  useEffect(() => {
    if (propsValue === undefined && !isFirsrRender.current) {
      setStateValue(propsValue!);
    }
    isFirsrRender.current = false;
  }, [propsValue]);

  const mergedValue = propsValue === undefined ? stateValue : propsValue;

  function isFunction(value: unknown): value is Function {
    return typeof value === "function";
  }
  const setState = useCallback(
    (value: SetStateAction<T>) => {
      const res = isFunction(value) ? value(stateValue) : value;
      if (propsValue === undefined) {
        setStateValue(res);
      }
      onChange?.(res);
    },
    [stateValue]
  );

  return [mergedValue, setState];
}

export default useMergeState;
