import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

export interface CustomWindow extends Window {
  __INITIAL_STATE__: {
    apiUrl: string;
    basename: string;
  };
}

declare let window: CustomWindow;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App
      apiUrl={window.__INITIAL_STATE__.apiUrl}
      basename={window.__INITIAL_STATE__.basename}
    />
  </StrictMode>
);
