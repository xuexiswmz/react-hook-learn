import useMergeState from "./useMergeValue";

interface CalendarProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}
function Calendar(props: CalendarProps) {
  const { value: propsValue, defaultValue, onChange } = props;
  const [mergedValue, setValue] = useMergeState(new Date(), {
    value: propsValue,
    defaultValue,
    onChange,
  });

  return (
    <div>
      {mergedValue?.toLocaleDateString()}
      <button
        onClick={() => {
          setValue(new Date("2025-6-17"));
        }}
      >
        2025-6-17
      </button>
      <button
        onClick={() => {
          setValue(new Date("2025-6-18"));
        }}
      >
        2025-6-18
      </button>
      <button
        onClick={() => {
          setValue(new Date("2025-6-19"));
        }}
      >
        2025-6-19
      </button>
    </div>
  );
}

function App() {
  const [value, setValue] = useMergeState(new Date("2024-6-10"));
  return (
    <div>
      {/* 非受控模式 */}
      <Calendar
        defaultValue={new Date("2025-6-1")}
        onChange={(date) => console.log(date.toLocaleDateString())}
      />
      {/* 受控模式 */}
      <Calendar
        value={value}
        onChange={(date) => {
          console.log(date.toLocaleDateString());
          setValue(date);
        }}
      />
    </div>
  );
}

export default App;
