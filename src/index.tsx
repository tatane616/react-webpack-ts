import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello, HelloClass } from "./components/Hello";

ReactDOM.render(
  <div>
  <Hello compiler="typescript" framework="react"/>
  <HelloClass compiler="TypeScript" framework="React"/>
  </div>,
  document.getElementById("example")
);