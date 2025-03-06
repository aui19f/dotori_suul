import { Outlet } from "react-router-dom";
import i_user from "@/assets/images/admin_user_active.png";
import i_content from "@/assets/images/admin_content_active.png";
export default function Admin() {
  return (
    <div className="flex h-full">
      <ul className="overflow-auto w-8  md:w-40 border-r border-r-gray-100 p-2">
        <li className="mb-2 size-6 md:size-auto">
          <p className="hidden md:block">게시글</p>
          <img src={i_content} alt="" className="size-6 md:hidden" />
        </li>
        <li className="mb-2 size-6 md:size-auto">
          <p className="hidden md:block">회원관리</p>
          <img src={i_user} alt="" className="size-6 md:hidden" />
        </li>
      </ul>
      <div className="flex-1 overflow-auto p-2">
        <Outlet />
      </div>
    </div>
  );
}
