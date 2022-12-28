import { createElement as $ } from "react";
import {
  Button1,
  Button2,
  Button3,
  text,
  icon,
  Container,
  NewBtnIcon,
  NewBtnText,
} from "./ButtonsStyles";

function Buttons() {
  return $(
    Container,
    { className: "btns-container" },
    // button 1
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
    // button 2
    $(
      Button2,
      { className: "btn-2" },
      $(NewBtnText, { className: "btn-2" }, $(text, null, "Button 2")),
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
