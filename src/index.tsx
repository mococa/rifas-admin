import React from "react";
import ReactDOM from "react-dom";

import { global as Global } from "styles/global";

import { Router } from "pages/Router/index";
import { AppProvider } from "contexts";

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <AppProvider>
      <Router />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
