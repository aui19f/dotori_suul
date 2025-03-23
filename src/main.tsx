import "@/assets/styles/output.css";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router";
import router from "@/Router";

import * as Sentry from "@sentry/react";

// Sentry 초기화 (DSN을 자신의 DSN으로 변경)
Sentry.init({ dsn: import.meta.env.VITE_SENTRY_DSN });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
