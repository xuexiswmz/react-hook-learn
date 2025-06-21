import useLifecycles from "./customHooks/useLifecycles";

function App() {
  useLifecycles(
    () => console.log("mounted"),
    () => console.log("unmounted")
  );
  return null;
}

export default App;
