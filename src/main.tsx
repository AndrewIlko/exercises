import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import queryClient from "./services/react-query.ts";
import { QueryClientProvider } from "react-query";
import "./styles/style.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
