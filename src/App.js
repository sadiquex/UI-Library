import { createElement as $ } from "react";
import UIComponents from "./Pages/UIComponents";
import { GlobalStyleComponent } from "styled-components";
import GlobalStyle from "./GlobalStyles";
const App = () => {
  return $("div", { className: "App" }, $(UIComponents), $(GlobalStyle));
};

export default App;
