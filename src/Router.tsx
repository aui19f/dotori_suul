import App from "@/App";
import AdminBrewery from "@/components/admin/Brewery";
import AdminDashBoard from "@/components/AdminDashBoard";
import BreweryDetail from "@/components/BreweryDetail";
import BreweryInformation from "@/components/BreweryInfo";
import BreweryProduct from "@/components/BreweryProduct";
import BreweryReview from "@/components/BreweryReview";
import HomeBrewDetail from "@/components/HomeBrewDetail";
import SuulDetail from "@/components/SuulDetail";
import Writing from "@/components/Writing";
import WritingList from "@/components/WritingList";
import Admin from "@/pages/Admin";
import Brewery from "@/pages/Brewery";
import CreateAccount from "@/pages/CreateAccount";
import Festival from "@/pages/Festival";
import Homebrew from "@/pages/Homebrew";
import Introduction from "@/pages/Introduction";
import Login from "@/pages/Login";
import MyPage from "@/pages/MyPage";
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
          { path: "homebrew", element: <Homebrew /> },
          { path: "homebrew/:id", element: <HomeBrewDetail /> },
        ],
      },

      {
        path: "brewery",
        element: <Brewery />,
        children: [
          {
            path: ":id",
            element: <BreweryDetail />,
            children: [
              { path: "information", element: <BreweryInformation /> },
              { path: "product", element: <BreweryProduct /> },
              { path: "review", element: <BreweryReview /> },
            ],
          },
        ],
      },
      {
        path: "suul",
        element: <Suul />,
        children: [{ path: ":id", element: <SuulDetail /> }],
      },
      { path: "festival", element: <Festival /> },
      { path: "intro", element: <Introduction /> },

      { path: "mypage", element: <MyPage /> },

      {
        path: "admin",
        element: <Admin />,
        children: [
          { path: "", element: <AdminDashBoard /> },
          {
            path: "writing/:type",
            element: <Writing />,
          },
          {
            path: "writing/list/:type",
            element: <WritingList />,
          },
        ],
      },
    ],
  },
  {
    path: "create-account",
    element: <CreateAccount />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
