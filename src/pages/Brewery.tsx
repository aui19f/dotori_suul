import BreweryDetail from "@/components/BreweryDetail";
import List from "@/components/List";
import useBreweryDataStore from "@/stores/brewery";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Brewery() {
  const [isModal, setIsModal] = useState(false);
  const location = useLocation();
  const { isLoading, data, fetchData, error } = useBreweryDataStore();
  const navi = useNavigate();
  //
  const onclick = (id: number) => {
    navi(`${id}/information`);
    if (window.innerWidth < 768) {
      setIsModal(true);
      console.log("모바일에서는 모달 -> 스크롤닫기");
    } else {
    }
  };

  useEffect(() => {
    if (location.pathname === "/brewery") {
      setIsModal(false);
      fetchData("brewery");
    }
    if (window.innerWidth > 768) {
      document.documentElement.style.setProperty("overflow", "hidden");
    }

    return () => {
      document.documentElement.style.setProperty("overflow", "auto");
    };
  }, [location]);

  return (
    <div className="flex h-full">
      <div
        className="w-screen md:w-96 p-2 border-r border-gray-50 md:overflow-auto"
        style={{
          overflow: isModal ? "hidden" : "auto",
        }}
      >
        <div className="flex flex-col mb-4">
          <select className="mb-2">
            <option value="">전체</option>
          </select>

          <div className="grid grid-cols-2 gap-2">
            <label className="input-checkbox">
              <p className="text-sm">찾아가는양조장(상시)</p>
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="input-checkbox">
              <p className="text-sm">찾아가는양조장(예약)</p>
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>

        <ul className="grid gap-4">
          {data.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                onclick(item.id);
              }}
            >
              <List
                id={item.id}
                title={item.store}
                explanation={item.address}
                tag={item.isTourism}
                tagName={item.visit}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:block flex-1 overflow-auto">
        <Outlet />
      </div>

      {isModal ? (
        <div className=" w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 flex items-center justify-center md:hidden">
          <div className="bg-white shadow-md rounded-md max-w-4xl h-full overflow-hidden">
            <Outlet />
          </div>
        </div>
      ) : null}
    </div>
  );
}
