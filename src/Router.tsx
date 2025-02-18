import App from "@/App";
import HomeBrewDetail from "@/components/HomeBrewDetail";
import Brewery from "@/pages/Brewery";
import CreateAccount from "@/pages/CreateAccount";
import Festival from "@/pages/Festival";
import Homebrew from "@/pages/Homebrew";
import Introduction from "@/pages/Introduction";
import Login from "@/pages/Login";
import Suul from "@/pages/Suul";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",

        children: [
          { path: "", element: <Homebrew /> },
          { path: "homebrew/detail", element: <HomeBrewDetail /> },
        ],
      },

      { path: "brewery", element: <Brewery /> },
      { path: "ssul", element: <Suul /> },
      { path: "festival", element: <Festival /> },
      { path: "intro", element: <Introduction /> },
    ],
  },
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
