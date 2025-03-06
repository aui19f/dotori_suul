import logo from "@/assets/images/logo.png";
import Menu from "@/components/layout/Menu";

import i_login from "@/assets/images/header_logout.png";
import i_menu from "@/assets/images/menu.png";

import { auth } from "@/fbase";

import { useNavigation } from "@/utils/navigation";
import { signOut } from "firebase/auth";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Header({ isLogin }: { isLogin: boolean }) {
  const [scrollingDown, setScrollingDown] = useState(false);
  let lastScrollTop = 0;

  const location = useLocation();
  const { navigateToLogin, navigateToCustem } = useNavigation();
  const userLogin = () => {
    navigateToLogin(location.pathname);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        setScrollingDown(true); // 스크롤을 내렸다면
      } else {
        setScrollingDown(false); // 스크롤을 올렸다면
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 스크롤이 0보다 작지 않게
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="flex items-center border-b border-b-gray-200 solid fixed left-0 right-0 h-14
      transition-all duration-300 ease-in-out
      bg-white
      "
      style={{
        top: scrollingDown ? "-56px" : "0",
      }}
    >
      <img src={logo} alt="logo" className="size-12" />

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
            className="p-2 mx-1 border-0"
            onClick={() => navigateToCustem("/mypage")}
          >
            <img src={i_menu} alt="" className="size-full" />
          </button>

          // <button
          //   onClick={userLogout}
          //   className="p-2 text-sm mx-1 rounded-md text-gray-600 hover:bg-gray-200 border-0 md:border md:border-gray-300"
          // >
          //   <img src={i_logout} alt="" className="md:hidden size-full" />
          //   <span className="hidden md:block">로그아웃</span>
          // </button>
        )}
      </div>
    </div>
  );
}
