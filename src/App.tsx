import { useEffect, useState } from "react";
import MutateObserver from "./api/MutateObserver";

function App() {
  const [className, setClassName] = useState("AAA");
  useEffect(() => {
    setTimeout(() => {
      setClassName("BBB");
    }, 2000);
  }, []);

  const callback = function (mutationList: MutationRecord[]) {
    console.log(mutationList);
  };

  return (
    <div>
      <MutateObserver onMutate={callback}>
        <div id="container">
          <div className={className}>
            {className === "AAA" ? (
              <div>AAA</div>
            ) : (
              <div>
                <p>BBB</p>
              </div>
            )}
          </div>
        </div>
      </MutateObserver>
    </div>
  );
}

export default App;
