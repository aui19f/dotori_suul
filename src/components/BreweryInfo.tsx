import i_clock from "@/assets/images/clock.png";
import i_categories from "@/assets/images/categories.png";
import i_info_phone from "@/assets/images/info_phone.png";
import i_info_location from "@/assets/images/info_location.png";
import i_web from "@/assets/images/web.png";

export default function BreweryInformation() {
  const data_brewery_information = {
    id: "",
    addres: "",
    homepage: "",
    product: "",
    txt: "",
  };
  return (
    <div className="grid gap-8">
      <ul className="grid gap-4">
        <li className="flex">
          <img src={i_clock} alt="" className="size-4 mr-2" />
          <p className="w-32">영업시간</p>

          <div className="flex-1">1</div>
        </li>

        <li className="flex">
          <div className="w-40 flex items-center">
            <img src={i_info_location} alt="" className="size-4 mr-2" />
            <p className="w-32">주소</p>
          </div>
          <p className="flex-1">
            (17966) 경기 평택시 포승읍 충열길 37 호랑이배꼽양조장
            (밝은세상영농조합)
          </p>
        </li>

        <li className="flex">
          <div className="w-40 flex items-center">
            <img src={i_info_phone} alt="" className="size-4 mr-2" />
            <p className="w-32">연락처</p>
          </div>
          <p className="flex-1">031-683-0981</p>
        </li>

        <li className="flex">
          <div className="w-40 flex items-center">
            <img src={i_web} alt="" className="size-4 mr-2" />
            <p className="w-32">홈페이지</p>
          </div>
          <p className="flex-1">인스타그램</p>
        </li>

        <li className="flex">
          <div className="w-40 flex items-center">
            <img src={i_categories} alt="" className="size-4 mr-2" />
            <p className="w-32">주종</p>
          </div>
          <p className="flex-1">탁주, 증류주</p>
        </li>
      </ul>
      <div>(이미지)</div>
      <div>(맵)</div>
    </div>
  );
}
