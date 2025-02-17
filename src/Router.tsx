import App from "@/App";
import CreateAccount from "@/pages/CreateAccount";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
