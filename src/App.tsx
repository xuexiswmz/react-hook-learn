import { useRef } from "react";
import useSize from "./customHooks/useSize";

const App = () => {
  const ref = useRef<HTMLElement>(null);
  const size = useSize(ref);
  return (
    <div ref={ref}>
      <p>窗口大小：</p>
      <p>
        width: {size?.width}px, height: {size?.height}px
      </p>
    </div>
  );
};

export default App;
