import { createElement as $ } from "react";
import { useState } from "react";
import {
  CardContainer,
  Card1,
  Card2,
  Card3,
  Card4,
  CardImage,
  Image,
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
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  // !!!!!!!!!!
  return $(
    CardContainer,
    null,
    $(
      Card1,
      { className: "Card One" },
      $(
        CardImage,
        { className: "card-image" }
        // $(Image, {
        //   src: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        // })
      ),
      $(ProductName, null, "Product Name"),
      $(Description, null, "This is the product description and details"),
      $(
        PriceAndCart,
        null,
        $(Price, null, "$299.59"),
        $(Cart, { className: "fa fa-shopping-cart" })
      )
    ),
    $(
      Card2,
      { className: "Card-two" },
      $(
        CardImage,
        { className: "card-image" }
        // $(Image, {
        //   src: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        // })
      ),
      $(
        Card2Content,
        { className: "card-2-content" },
        $(ProductName, null, "Product Name"),
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
      $(
        Card3Top,
        { className: "card-3-top" },
        $(Image, {
          src: "https://static.vecteezy.com/system/resources/previews/001/191/989/non_2x/circle-logo-png.png",
        })
      ),
      $(
        Card3Down,
        { className: "card-3-down" },
        $(ProductName, null, "Product Name"),
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
        $(ProductName, null, "Product Name"),
        $(Description, null, "This is the product description and details"),
        $(
          PriceAndCart,
          null,
          $(Price, null, "$299.59"),
          $(Cart, { className: "fa fa-shopping-cart" })
        )
      ),
      $(Card4Down, null, $(ProductName, null, "Product Image Here"))
    )
  );
};

export default Cards;

// a state to open when the card's arrow is clicked
