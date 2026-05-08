import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

// Registers:
// window.WebSmartAssistantForm(...)
import "./widget";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);