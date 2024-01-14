import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@code-hike/mdx/styles";
import "./images/styles.css";

import { Book } from "./Book";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Book />
  </BrowserRouter>,
);
