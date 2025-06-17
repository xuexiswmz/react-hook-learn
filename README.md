### react hook learn

#### 具体内容

##### 1. **useState 状态管理**

   - useState 接受一个参数，这个参数是初始值，返回一个数组，这个数组有两个元素，第一个元素是当前状态，第二个元素是一个函数，这个函数接受一个参数，这个参数是新的状态，这个函数会更新状态，并返回新的状态。

##### 2. **useEffect 初始渲染后异步请求再更新状态**

   - useEffect 接受两个参数，第一个参数是回调函数，第二个参数是依赖数组，当依赖数组中的值发生变化时，回调函数会被执行。

##### 3. **useLayoutEffect 同步执行**

   - useLayoutEffect 和 useEffect 类似，但是 useLayoutEffect 会在渲染前执行，而 useEffect（异步执行） 可能会在渲染前执行，也可能在渲染后执行。

##### 4. **useReducer 适用于复杂状态逻辑**

**封装到 ruducer 里面，通过 action 触发，修改深层对象时可结合 immer**

   - useReducer 接受两个参数，第一个参数是 reducer 函数，第二个参数是初始值
   - reducer 函数接受两个参数，第一个参数是当前状态，第二个参数是 action，action 是一个对象，包含 type 和 payload 两个属性，type 是 action 的类型，payload 是 action 的负载。

##### 5. **useRef 保存 dom 引用或其他内容**

**（通过 xxref.current 获取），改变它的内容不会触发重新渲染**

   - useRef 接受一个参数，这个参数是初始值，返回一个对象，这个对象有一个 current 属性，这个属性是初始值。

##### 6. **forwardRef+useImperativeHandle**

**forwardRef 将子组件 ref 转发到父组件，useImperativeHandle 可以自定义暴露给父组件的 ref 属性**

   - forwardRef 接受一个参数，这个参数是一个函数，这个函数接受两个参数，第一个参数是 props，第二个参数是 ref 对象，这个函数返回一个 React 元素，这个 React 元素可以接受 ref 对象。
   - useImperativeHandle 接受两个参数，第一个参数是 ref 对象，第二个参数是一个函数，这个函数接受一个参数，这个参数是 ref 对象，这个函数返回一个对象，这个对象是 ref 对象的 current 属性。

##### 7. **useContext 跨组件传递数据**

   - createContext 创建一个 context 对象，通过 Provider 组件提供数据/修改其中的值，通过 useContext 获取数据。
   - useContext 接受一个参数，这个参数是一个 context 对象，返回一个值，这个值是 context 对象的 value 属性。

#####  8. **memo + useMeme + useCallback**

**组合使用，减少不必要的渲染**

   - memo 接受一个参数，这个参数是一个 React 元素，当这个 React 元素的 props 发生变化时，memo 会重新渲染这个 React 元素。
   - useMemo 接受两个参数，第一个参数是回调函数，第二个参数是依赖数组，当依赖数组中的值发生变化时，回调函数会被执行，返回值是回调函数的返回值。
   - useCallback 接受两个参数，第一个参数是回调函数，第二个参数是依赖数组，当依赖数组中的值发生变化时，回调函数会被执行，返回值是回调函数的返回值。

##### 9. **闭包陷阱及其解决方案**

   - 闭包陷阱是指在一个函数内部定义的函数，这个函数引用了外部函数的变量，当外部函数的变量发生变化时，内部函数的变量不会发生变化，导致内部函数的变量始终是外部函数的变量的初始值。
     - 解决方法（定时器场景）
     - 使用setState的函数形式
     - 使用useReducer，直接dispatch action
     - 把state加到依赖数组中（导致定时器不是每秒执行，不推荐）
     - 使用useRef保存每次渲染的值
       - 封装了一个useInterval，使用useEffect + useRef 解决闭包陷阱问题

#### 项目启动

```
npm i
npm run dev
```

把每一个文件夹下面的 app.tsx 复制粘贴到根目录下的 app.tsx