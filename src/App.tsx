import { useRef } from "react";
import useHover from "./customHooks/useHover2";

const App = () => {
  const ref = useRef<HTMLElement>(null);
  const isHovering = useHover(ref);
  return <div ref={ref}>{isHovering ? "Hovering" : "Not Hovering"}</div>;
};

export default App;
