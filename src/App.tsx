import { useEffect, useRef } from "react";
import Portal from "./api/Portal";

function App() {
  const content = (
    <div className="btn">
      <button>btn</button>
    </div>
  );

  const containerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    console.log(containerRef);
  }, []);

  return (
    <>
      <Portal attach={document.body}>{content}</Portal>
      <Portal attach={document.body} ref={containerRef}>
        {content}
      </Portal>
    </>
  );
}

export default App;
