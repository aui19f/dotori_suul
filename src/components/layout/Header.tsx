import logo from "@/assets/images/logo.png";
import Menu from "@/components/layout/Menu";
import { auth } from "@/fbase";

import { useNavigation } from "@/utils/navigation";
import { signOut } from "firebase/auth";

import { useLocation, useNavigate } from "react-router-dom";
export default function Header({ isLogin }: { isLogin: boolean }) {
  const location = useLocation();
  const { navigateToLogin } = useNavigation();

  const userLogin = () => {
    navigateToLogin(location.pathname);
  };
  const userLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log("logout error");
      });
  };
  return (
    <div className="flex items-center  bg-gray-100 border-b border-b-gray-200 solid fixed left-0 top-0 right-0">
      <div className="size-16 p-1">
        <img src={logo} alt="logo" className="h-full" />
      </div>

      <Menu />
      <div className="m-auto">
        {/* <button
          
          className="border border-gray-300 p-2 text-sm mx-1 rounded-md text-gray-600 hover:bg-gray-200"
        >
          새로운소식
        </button> */}

        {isLogin ? (
          <button
            onClick={userLogin}
            className="border border-gray-300 p-2 text-sm mx-1 rounded-md text-gray-600 hover:bg-gray-200"
          >
            로그인
          </button>
        ) : (
          <button
            onClick={userLogout}
            className="border border-gray-300 p-2 text-sm mx-1 rounded-md text-gray-600 hover:bg-gray-200"
          >
            로그아웃1
          </button>
        )}
      </div>
    </div>
  );
}
