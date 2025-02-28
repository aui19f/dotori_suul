import "@/assets/styles/output.css";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router";
import router from "@/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Query 클라이언트 생성
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
