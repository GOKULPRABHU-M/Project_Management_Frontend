import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./context/AppContext"; // <-- fixed

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider> {/* Provide context to entire app */}
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
