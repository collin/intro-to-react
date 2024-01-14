import ReactDOM from "react-dom/client";
import TodoList from "./TodoList";

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(<TodoList />);
