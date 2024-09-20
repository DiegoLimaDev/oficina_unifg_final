import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles
      styles={{
        body: { margin: 0, padding: 0, fontSize: "62.5%" },
      }}
    />
    <App />
  </StrictMode>,
);
