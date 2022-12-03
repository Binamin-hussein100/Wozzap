import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import {ContextProvider}  from "functions/context.tsx";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  // <ContextProvider>
  //   <App />
  // </ContextProvider>,
  rootElement
);
