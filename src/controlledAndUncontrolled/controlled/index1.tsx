import { useState } from "react";
// 受控组件
// 直接用props传入的value，通过onChange方法改变value
interface CalendearProps {
  value: Date;
  onChange?: (date: Date) => void;
}

function Calendar(props: CalendearProps) {
  const { value, onChange } = props;

  function changeValue(date: Date) {
    onChange?.(date);
  }
  return (
    <div>
      {value.toLocaleDateString()}
      <button
        onClick={() => {
          changeValue(new Date("2025-6-17"));
        }}
      >
        2025-6-17
      </button>
      <button
        onClick={() => {
          changeValue(new Date("2025-6-18"));
        }}
      >
        2025-6-18
      </button>
      <button
        onClick={() => {
          changeValue(new Date("2025-6-19"));
        }}
      >
        2025-6-19
      </button>
    </div>
  );
}
function App() {
  const [value, setValue] = useState(new Date("2025-6-1"));
  return (
    <Calendar
      value={value}
      onChange={(date) => {
        console.log(date.toLocaleDateString());
        setValue(date);
      }}
    />
  );
}

export default App;
