import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import queryClient from "./services/react-query.ts";
import { QueryClientProvider } from "react-query";
import "./styles/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
