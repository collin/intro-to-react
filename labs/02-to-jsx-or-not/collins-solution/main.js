import ReactDOM from "react-dom/client";
import React from "react";
import { NoJSX } from "./NoJSX";

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(React.createElement(NoJSX));
