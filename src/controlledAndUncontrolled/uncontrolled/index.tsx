import { useEffect, useRef, type ChangeEvent } from "react";

function App() {
  //非受控，通过监听onChange或者ref拿到value值
  // onChange
  // function onChange(event: ChangeEvent<HTMLInputElement>) {
  //   console.log(event.target.value);
  // }

  // ref
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setTimeout(() => {
      console.log(inputRef.current?.value);
    }, 2000);
  }, []);
  return (
    <input
      defaultValue={"xuexiswmz"}
      // onChange={onChange}
      ref={inputRef}
    />
  );
}

export default App;
