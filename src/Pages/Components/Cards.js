import { createElement as $ } from "react";
import {
  CardContainer,
  Card1,
  Card2,
  Card3,
  Card4,
  CardImage,
  ProductName,
  Description,
  PriceAndCart,
  Price,
  Cart,
  Card2Content,
  Card3Top,
  Card3Down,
  Card4Top,
  Card4Down,
} from "./CardStyles";

const Cards = () => {
  // !!!!!!!!!!
  return $(
    CardContainer,
    null,
    $(
      Card1,
      { className: "Card One" },
      $(CardImage, { className: "card-image" }),
      $(ProductName, null, "Product Name"),
      $(Description, null, "This is the product description and details"),
      $(
        PriceAndCart,
        { className: "cardOne" },
        $(Price, null, "$299.59"),
        $(Cart, { className: "fa fa-shopping-cart" })
      )
    ),
    $(
      Card2,
      { className: "Card-two" },
      $(CardImage, { className: "card-image" }),
      $(
        Card2Content,
        { className: "card-2-content" },
        $(ProductName, null, "Card two"),
        $(
          Description,
          null,
          "This is the product description and details, the content goes here, lorem ipsum isnt working:)"
        ),
        $(
          PriceAndCart,
          null,
          $(Price, null, "$299.59"),
          $(Cart, { className: "fa fa-shopping-cart" })
        )
      )
    ),
    $(
      Card3,
      { className: "Card-three" },
      $(Card3Top, { className: "card-3-top" }),
      $(
        Card3Down,
        { className: "card-3-down" },
        $(ProductName, null, "Card three"),
        $(Description, null, "This is the product description and details"),
        $(
          PriceAndCart,
          null,
          $(Price, null, "$299.59"),
          $(Cart, { className: "fa fa-shopping-cart" })
        )
      )
    ),
    $(
      Card4,
      { className: "card-four" },
      $(
        Card4Top,
        null,
        $(ProductName, null, "Card four"),
        $(Description, null, "This is the product description and details"),
        $(
          PriceAndCart,
          null,
          $(Price, null, "$299.59"),
          $(Cart, { className: "fa fa-shopping-cart" })
        )
      ),
      $(
        Card4Down,
        null,
        $(ProductName, null, "Product Image Here"),
        $(Description, null, "This is the product description and details")
      )
    )
  );
};

export default Cards;

// a state to open when the card's arrow is clicked
