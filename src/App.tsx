import { useRef } from "react";
import useScrolling from "./customHooks/useScrolling";

const App = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrolling = useScrolling(scrollRef);

  return (
    <>
      {<div>{scrolling ? "滚动中.." : "没有滚动"}</div>}

      <div ref={scrollRef} style={{ height: "200px", overflow: "auto" }}>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
        <div>xuexiswmz</div>
      </div>
    </>
  );
};

export default App;
