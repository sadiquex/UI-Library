import { createElement as $ } from "react";
import { container, Heading } from "./UIStyles";
import Buttons from "./Components/Buttons";
import Cards from "./Components/Cards";

const UIComponents = () => {
  return $(
    container,
    { className: "container" },
    $(Heading, null, "Buttons"),
    $(Buttons),
    $(Heading, null, "Cards"),
    $(Cards)
  );
};

export default UIComponents;
