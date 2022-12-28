import { createElement as $ } from "react";
import UIComponents from "./Pages/UIComponents";
const App = () => {
  return $("div", { className: "App" }, $(UIComponents));
};

export default App;
