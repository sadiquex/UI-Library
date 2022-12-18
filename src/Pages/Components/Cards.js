import { createElement as $ } from "react";
import { Card1, CloseArrow, Heading, OpenArrow } from "./CardStyles";
import { useState } from "react";

const Cards = () => {
  const [open, setOpen] = useState(false);

  const clicked = () => {
    setOpen(!open);
  };

  return $(
    Card1,
    { className: "Card One" },
    $(Heading, { className: "card-1-heading" }, "Click on the arrow"),
    $(OpenArrow, {
      className: "fa-solid fa-angle-down",
      onClick: () => clicked(),
    }),
    $(CloseArrow, { className: "fa-solid fa-times", onClick: () => clicked() })
  );
};

export default Cards;

// a state to open when the card's arrow is clicked
