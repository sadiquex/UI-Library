import { createElement as $ } from "react";
import {
  Card1,
  CloseArrow,
  Heading,
  OpenArrow,
  cardContent,
} from "./CardStyles";
import { useState } from "react";

const Cards = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  // !!!!!!!!!!
  return $(
    Card1,
    { className: "Card One" },
    $(Heading, { className: "card-1-heading" }, "Click on the arrow"),
    $(OpenArrow, {
      className: "fa-solid fa-angle-down",
      onClick: () => toggleMenu(),
    }),
    $(CloseArrow, {
      className: "fa-solid fa-times",
      onClick: () => toggleMenu(),
    }),
    $(
      cardContent,
      { className: "card-content", onClick: () => toggleMenu() },
      "this is some dummy text for the content of the card"
    )
  );
};

export default Cards;

// a state to open when the card's arrow is clicked
