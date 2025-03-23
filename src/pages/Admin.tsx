import { Outlet, Route, Router, Routes } from "react-router-dom";
import i_user from "@/assets/images/admin_user_active.png";
import i_content from "@/assets/images/admin_content_active.png";
export default function Admin() {
  return (
    <div className="p-2">
      <Outlet />
    </div>
  );
}
