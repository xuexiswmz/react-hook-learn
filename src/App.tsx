import copy from "copy-to-clipboard";
import CopyToClipboard from "./api/CopyToClipboard";

function App() {
  function onClick(){
    const res = copy('hello world')
    console.log('copied',res);
  }
  
  return <div>
    
    {/* 原生写法 */}
    <div onClick={onClick}>copy</div>
    
    {/* 封装写法 */}
    <CopyToClipboard text="hello world" onCopy={()=>console.log('copied')
    }>
      <div>copy</div>
    </CopyToClipboard>

    </div>
}

export default App;
