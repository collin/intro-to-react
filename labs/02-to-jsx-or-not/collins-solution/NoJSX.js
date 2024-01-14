import { createElement } from "react";

export const NoJSX = () => {
  return createElement("ol", {}, [
    createElement("li", {}, "First"),
    createElement("li", {}, "Second"),
    createElement("li", {}, "Third"),
  ]);
};
