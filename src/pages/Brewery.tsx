import BreweryDetail from "@/components/BreweryDetail";
import List from "@/components/List";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Brewery() {
  const navi = useNavigate();

  const breweryData = [
    {
      id: 11,
      store: "호랑이배꼽양조장(밝은세상영농조합)",
      address:
        "경기 평택시 포승읍 충열길 37 호랑이배꼽양조장 (밝은세상영농조합)",
      local: "경기도",
      tjfaud:
        "기상하는 호랑이 형상 한반도의 배꼽자리, 경기도 평택의 자연을 담아 우리술을 빚습니다.",

      isVisiting: true,
      isRegular: true,
      isReserved: false,
    },
    {
      id: 12,
      store: "농업회사법인(주)좋은술",
      address: "경기 평택시 오성면 숙성뜰길 108 농업회사법인(주)좋은술",
      local: "경기도",
      tjfaud:
        "천비향은 경기도 평택 숙성리 마을의 좋은술 양조장에서 생산되는 고귀한 전통주입니다. 이 술은 평택의 풍부한 자연과 양조장의 정성을 담아내어 많은 사람들에게 사랑받고 있습니다. 숙성리 마을은 드넓은 평야와 강변이 어우러져 아름다운 자연 경관을 자랑합니다. 여름에는 푸른 벼가 들판을 가득 채우고, 가을이 되면 황금빛 벼가 물결치는 환상적인 풍경을 연출합니다. 좋은술 양조장은 이 자연의 선물을 활용하여, 맑고 깨끗한 강물과 평택의 비옥한 토양에서 자란 쌀을 사용해 술을 빚습니다.",
      isVisiting: true,
      isRegular: false,
      isReserved: true,
    },
    {
      id: 13,
      store: "해창주조장 주식회사 농업회사법인",
      address: "전남 해남군 화산면 해창길 1 해창주조장 주식회사 농업회사법인",
      local: "전라도",
      tjfaud:
        "땅끝 해남에 위치한 해창주조장은 최상급 멥쌀과 유기농 찹쌀로 무감미료 프리미엄 막걸리를 생산하고 있으며, 정원이 아름다운 주조장으로도 유명하다.",
      isVisiting: true,
      visitingType: "상시방분",
    },
  ];
  const onclick = (id: number) => {
    console.log("[id] ", id);
    navi(`${id}/information`);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("overflow", "hidden");
    return () => {
      document.documentElement.style.setProperty("overflow", "auto");
    };
  }, []);
  return (
    <div className="flex h-full">
      <div className="w-96 pr-4 border-r border-gray-50 overflow-auto">
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
          {breweryData.map((item) => (
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
                tag={item.visitingType}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 px-4">
        {/* <BreweryDetail /> */}
        <Outlet />
      </div>
    </div>
  );
}
