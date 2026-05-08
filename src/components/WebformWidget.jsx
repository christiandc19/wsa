import { useEffect } from "react";

export default function WebformWidget() {
  useEffect(() => {
    if (!window.WebSmartAssistantForm) {
      console.error("WebSmartAssistantForm is not registered.");
      return;
    }

window.WebSmartAssistantForm({
  target: "#evergreen-webform-widget",
  clientKey: "evergreen-heights",
  formKey: "senior-living-contact",
  apiUrl: "https://su3cjmqk2h.ap-southeast-2.awsapprunner.com/api/Leads",
  apiKey: "dev-webform-key-12345",
  source: "webform",
});

  }, []);

  return <div id="wsa-form"></div>;
}