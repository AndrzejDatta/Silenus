import React from "react";
import ReactDOM from "react-dom/client";
import { AppStyles } from "providers/AppStyles";
import App from "./App";
import { DataProvider } from "providers/DataProvider";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { worker } from "__mocks__/browser";

worker.start().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <AppStyles>
        <DataProvider>
          <App />
        </DataProvider>
      </AppStyles>
    </React.StrictMode>
  );
  serviceWorkerRegistration.register();
});
