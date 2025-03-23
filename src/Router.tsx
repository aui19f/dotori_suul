import App from "@/App";

import AdminDashBoard from "@/components/AdminDashBoard";
import BreweryDetail from "@/components/BreweryDetail";
import BreweryInformation from "@/components/BreweryInfo";
import BreweryProduct from "@/components/BreweryProduct";
import BreweryReview from "@/components/BreweryReview";
import WritingBrewery from "@/components/forms/WritingBrewery";
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
import { useLoginStore } from "@/stores/loginStore";
import { createBrowserRouter, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, requiredRole }) => {
  const { user } = useLoginStore();
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (requiredRole) {
    if (user.role !== requiredRole) {
      // 권한이 없는 사용자
      return <Navigate to="/" />;
    }
  }
  return element;
};

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

      {
        path: "mypage",
        element: <ProtectedRoute element={<MyPage />} />,
      },
      { path: "mypage/list/:menu", element: <WritingList /> },

      {
        path: "admin",
        element: <ProtectedRoute element={<Admin />} requiredRole="admin" />,
        children: [
          { path: "", element: <AdminDashBoard /> },
          {
            path: "writing",
            element: <Writing />,
            children: [
              {
                path: "list/:menu",
                element: <WritingList />,
              },
              {
                path: "brewery",
                element: <WritingBrewery />,
              },
            ],
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
// const Admin = () => {
//   //
//   // if (!user) {
//   //   window.location.href = "/login";
//   // }
//   // if (user?.role !== "admin") {
//   //   window.location.href = "/mypage";
//   // }
//   return <Admin />;
// };
export default router;
