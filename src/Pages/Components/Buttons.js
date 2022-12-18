import React from "react";
import { createElement as $ } from "react";
import { Button1, text, rightArrow } from "./ButtonsStyles";

function Buttons() {
  return $(
    Button1,
    { className: "btn-1" },
    $(rightArrow, { className: "fa-solid fa-circle-arrow-right" }),
    $(text, null, "Button One")
  );
}

export default Buttons;
