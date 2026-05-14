import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/globals.css";
import Page from "./page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Page />
  </StrictMode>
);
