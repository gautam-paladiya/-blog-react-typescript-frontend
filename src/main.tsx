import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  SettingsConsumer,
  SettingsProvider,
} from "./provider/SettingContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SettingsProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </SettingsProvider>
  </React.StrictMode>
);
