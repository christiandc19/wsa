import React from "react";
import ReactDOM from "react-dom/client";

import WebformWidget from "./components/WebformWidget";

window.WebSmartAssistantForm = function (config = {}) {
  const {
    target = "#wsa-form",
    clientKey = "evergreen-heights",
    formKey = "senior-living-contact",
    apiUrl = "http://localhost:5297/api/Leads",
    apiKey = "",
    source = "webform",
    recaptchaSiteKey = "",
  } = config;

  const container = document.querySelector(target);

  if (!container) {
    console.error(`WebSmartAssistantForm: target not found: ${target}`);
    return;
  }

  ReactDOM.createRoot(container).render(
    <WebformWidget
      clientKey={clientKey}
      formKey={formKey}
      apiUrl={apiUrl}
      apiKey={apiKey}
      source={source}
      recaptchaSiteKey={recaptchaSiteKey}
    />
  );
};