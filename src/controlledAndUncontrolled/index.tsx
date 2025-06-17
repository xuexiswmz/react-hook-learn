import { useEffect, useRef, useState } from "react";
// 同时支持受控和非受控模式
// 受控模式：useState初始值为props.value，渲染用props.value
// 非受控模式: 渲染用state的value，然后changValue里的setValue
// 当不是首次渲染或value变为undefined时，使用defaultValue，受控模式->非受控模式, 同时设置state为propsValue
interface CalendearProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}

function Calendar(props: CalendearProps) {
  const { value: propsValue, defaultValue, onChange } = props;

  const [value, setValue] = useState(() => {
    //  如果propsValue有值，则使用propsValue，否则使用defaultValue
    if (propsValue !== undefined) {
      return propsValue;
    } else {
      return defaultValue;
    }
  });

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (propsValue === undefined && !isFirstRender.current) {
      //  如果propsValue没有值，并且不是第一次渲染，则使用defaultValue
      setValue(defaultValue);
    }
    console.log("受控模式");
    isFirstRender.current = false;
  }, [propsValue]);

  const mergedValue = propsValue === undefined ? value : propsValue;

  function changeValue(date: Date) {
    if (propsValue === undefined) {
      //  如果propsValue为undefined，则表示非受控模式
      console.log("非受控模式");

      setValue(date);
    }
    onChange?.(date);
  }
  return (
    <div>
      {mergedValue?.toLocaleDateString()}
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
  const [value, setValue] = useState(new Date("2025-6-10"));
  return (
    <div>
      <div>
        非受控组件
        <Calendar
          defaultValue={new Date("2025-6-1")}
          onChange={(date) => {
            console.log(date.toLocaleDateString());
          }}
        />
      </div>
      <div>
        受控组件
        <Calendar
          value={value}
          onChange={(date) => {
            console.log(date.toLocaleDateString());
            setValue(date);
          }}
        />
      </div>
    </div>
  );
}

export default App;
