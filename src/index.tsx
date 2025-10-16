import { createRoot } from "react-dom/client";
import "./styles/index.scss";

const App = () => {
  return <h1>Hello from React and TypeScript!</h1>;
};

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
