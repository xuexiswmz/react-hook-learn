import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// createRoot(document.getElementById("root")!).render(
//   // 关闭严格模式，取消多余渲染
//   // <StrictMode>
//   <App />
//   // </StrictMode>
// );
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
