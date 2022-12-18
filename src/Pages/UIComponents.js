import { createElement as $ } from "react";
import { container } from "./UIStyles";
import Buttons from "./Components/Buttons";
import Cards from "./Components/Cards";

const UIComponents = () => {
  return $(container, { className: "container" }, $(Buttons), $(Cards));
};

export default UIComponents;
