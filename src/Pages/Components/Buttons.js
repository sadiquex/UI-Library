import React from "react";
import { createElement as $ } from "react";
import {
  Button1,
  Button2,
  Button3,
  text,
  icon,
  Container,
  NewBtn,
  NewBtnIcon,
  NewBtnText,
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
      Button1,
      { className: "btn-2" },
      $(NewBtnText, { className: "btn-2" }, $(text, null, "Button 1 Hover!")),
      $(
        NewBtnIcon,
        null,
        $(icon, { className: "fa fa-whatsapp" }),
        $(icon, { className: "fa fa-facebook" }),
        $(icon, { className: "fa fa-twitter" })
      )
    ),
    $(
      Button2,
      { className: "btn-2" },
      $(NewBtnText, { className: "btn-2" }, $(text, null, "Contact Us!")),
      $(
        NewBtnIcon,
        null,
        $(icon, { className: "fa fa-whatsapp" }),
        $(icon, { className: "fa fa-facebook" }),
        $(icon, { className: "fa fa-twitter" })
      )
    ),

    $(
      Button3,
      { className: "btn-2" },
      $(NewBtnText, null, "Delete"),
      $(NewBtnIcon, { className: "fa fa-times delete" })
    )
  );
}

export default Buttons;
