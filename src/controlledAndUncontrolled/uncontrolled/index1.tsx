import { useState } from "react";
// 非受控组件
// 调用者只能通过设置defaultValue来修改Calendar组件的值，不能直接传入value来控制
// Calendar组件传入defaultValue和onChange -> 用户点击不同的按钮 -> onChange触发 -> 修改defaultValue
interface CalendearProps {
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}

function Calendar(props: CalendearProps) {
  const { defaultValue = new Date(), onChange } = props;

  const [value, setValue] = useState(defaultValue);

  function changeValue(date: Date) {
    setValue(date);
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
  return (
    <Calendar
      defaultValue={new Date("2025-6-1")}
      onChange={(date) => {
        console.log(date.toLocaleDateString());
      }}
    />
  );
}

export default App;
