import React from "react";
import { createElement as $ } from "react";
import {
  Button1,
  text,
  icon,
  Container,
  btndiv,
  StrokedBtn,
  FixStroke,
  Delete,
} from "./ButtonsStyles";
import { useState } from "react";

function Buttons() {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return $(
    Container,
    { className: "btns-container" },
    $(
      btndiv,
      null,
      $(
        Button1,
        { className: "btn-2", onClick: () => toggle() },
        $(icon, {
          className: "fa-solid fa-circle-arrow-right",
        }),
        $(text, null, "First Button")
      ),
      $(icon, { className: "fa-solid fa-circle-arrow-right" }),
      $(
        Button1,
        { className: "btn-2" },
        $(icon, { className: "fa fa-long-arrow-right" }),
        $(text, null, "First Button")
      )
    ),
    $(
      btndiv,
      null,
      $(Button1, { className: "btn-2" }, $(text, null, "Contact Us!")),
      $(icon, { className: "fa-solid fa-circle-arrow-right" }),
      $(
        FixStroke,
        null,
        $(
          StrokedBtn,
          { className: "btn-2" },
          $(icon, { className: "fa-solid fa-circle-arrow-right" }),
          $(
            text,
            null,
            $(icon, { className: "fa fa-globe" }),
            $(icon, { className: "fa fa-globe" }),
            $(icon, { className: "fa fa-globe" })
          )
        )
      )
    ),
    $(
      btndiv,
      null,
      $(Delete, { className: "fa fa-times delete" }),
      $(icon, { className: "fa-solid fa-circle-arrow-right" }),
      $(Button1, { className: "btn-2" }, $(text, null, "Delete"))
    )
  );
}

export default Buttons;
