import suul from "@/assets/images/menu_suul.png";
import festival from "@/assets/images/menu_festival.png";
import introduction from "@/assets/images/menu_introduction.png";
import brewery from "@/assets/images/menu_brewery.png";
import homebrew from "@/assets/images/menu_homebrew.png";

import { Link, useLocation, useMatch } from "react-router-dom";

export default function Menu() {
  const location = useLocation();

  const isActive = (path: string) => {
    return Boolean(location.pathname.startsWith(path));
  };

  return (
    <nav className="flex-1">
      <ul className="flex">
        <Link to="/">
          <li
            className={`flex items-center opacity-60 py-2 mx-2 ${
              (location.pathname === "/" || isActive("/homebrew")) &&
              "border-b-2 border-b-gray-800 "
            }`}
          >
            <img
              className="size-6 mr-1  md:block hidden"
              src={homebrew}
              alt="가양주"
            />
            <p
              className={`text-sm md:text-base ${
                location.pathname === "/" || isActive("/homebrew")
                  ? "text-gray-800 font-bold"
                  : "text-gray-400"
              }`}
            >
              가양주
            </p>
          </li>
        </Link>

        <Link to="/brewery">
          <li
            className={`flex items-center opacity-60 py-2 mx-2 ${
              isActive("/brewery") && "border-b-2 border-b-gray-800 "
            }`}
          >
            <img
              className="size-6 mr-1 md:block hidden"
              src={brewery}
              alt="양조장"
            />
            <p
              className={`text-sm md:text-base ${
                isActive("/brewery")
                  ? "text-gray-800 font-bold"
                  : "text-gray-400"
              }`}
            >
              양조장
            </p>
          </li>
        </Link>
        <Link to="/suul">
          <li
            className={`flex items-center opacity-60 py-2 mx-2 ${
              isActive("/suul") && "border-b-2 border-b-gray-800 "
            }`}
          >
            <img
              className="size-6 mr-1 md:block hidden"
              src={suul}
              alt="우리술"
            />
            <p
              className={`text-sm md:text-base 
                ${
                  isActive("/suul")
                    ? "text-gray-800 font-bold"
                    : "text-gray-400"
                }
              `}
            >
              우리술
            </p>
          </li>
        </Link>
        <Link to="/festival">
          <li
            className={`flex items-center opacity-60 py-2 mx-2 ${
              isActive("/festival") && "border-b-2 border-b-gray-800 "
            }`}
          >
            <img
              className="size-6 mr-1 md:block hidden"
              src={festival}
              alt="대축제"
            />
            <p
              className={`text-sm md:text-base  ${
                isActive("/festival")
                  ? "text-gray-800 font-bold"
                  : "text-gray-400"
              }`}
            >
              대축제
            </p>
          </li>
        </Link>
        {/* <Link to="/intro">
          <li
            className={`flex items-center opacity-60 py-2 mx-2 ${
              introMatch && "border-b-2 border-b-gray-800 "
            }`}
          >
            <img className="size-6 mr-1" src={introduction} alt="소개" />
            <p
              className={
                introMatch ? "text-gray-800 font-bold" : "text-gray-400"
              }
            >
              소개
            </p>
          </li>
        </Link> */}
      </ul>
    </nav>
  );
}
