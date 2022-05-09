import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import { HelmetProvider } from "react-helmet-async";
import { CurrentUserProvider } from "./Context/userContext";

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </CurrentUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
