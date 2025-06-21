import useHover from "./customHooks/useHover";

function App() {
  const element = () => <div>hover me </div>;
  const [hoverable, hovered] = useHover(element);

  return (
    <div>
      {hoverable}
      <div>{hovered ? "hovered" : ""}</div>
    </div>
  );
}

export default App;
