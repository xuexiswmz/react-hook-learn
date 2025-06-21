import { useEffect } from "react";
import useCookie from "./customHooks/useCookie";

function App() {
  const [value, updateCookie, deleteCookie] = useCookie("xuexiswmz");

  useEffect(() => {
    deleteCookie();
  }, []);

  const updateCookieHandler = () => {
    updateCookie("xuexi");
  };

  return (
    <div>
      <p>cookie value:{value}</p>
      <button onClick={updateCookieHandler}>update cookie</button>
      <button onClick={deleteCookie}>delete cookie</button>
    </div>
  );
}

export default App;
