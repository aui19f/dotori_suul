/**
 * 화면사이즈가 크면 오른쪽으로 출력
 * 그렇지 않을 경우 페이지 이동 또는 모달.. 고민 중-
 * 모달로 할 경우 URL은 변경
 */
import i_push_pin from "@/assets/images/push_pin.png";

import i_bookmark from "@/assets/images/bookmark.png";
import i_bookmark_active from "@/assets/images/bookmark_active.png";
import i_heart_active from "@/assets/images/heart_active.png";

import i_drinks_active from "@/assets/images/drinks_color.png";
import i_drinks from "@/assets/images/drinks.png";

import i_info from "@/assets/images/info.png";
import i_info_active from "@/assets/images/info_clolor.png";
import i_close from "@/assets/images/modal_close.png";
import i_review from "@/assets/images/review.png";
import i_review_active from "@/assets/images/review_color.png";
import { Outlet, useNavigate } from "react-router-dom";
import { useNavigation } from "@/utils/navigation";

export default function BreweryDetail({ isModal }: { isModal: boolean }) {
  const { navigateHistoryBack } = useNavigation();
  const navi = useNavigate();
  const pageMovie = (name: string) => {
    navi(name);
  };

  return (
    <div className="m-auto max-w-4xl p-2 relative">
      <div className="grid gap-2 ">
        <div className="flex">
          <h2 className="flex-1 text-xl">호랑이배꼽양조장(밝은세상영농조합)</h2>
          <div
            className="size-6 p-1 md:hidden"
            onClick={() => navigateHistoryBack()}
          >
            <img src={i_close} alt="닫기" />
          </div>
        </div>

        <div className="flex">
          <img src={i_push_pin} alt="" className="size-6" />
          <p className="text-gray-400 flex-1">이곳은 찾아가는 양조장입니다.</p>

          <div className="border rounded-xl border-blue-400 px-2 py-1 w-fit">
            <p className="text-sm text-blue-400">예약방문</p>
          </div>
        </div>
      </div>

      <ul className="max-w-xl grid gap-4 grid-cols-5 my-8 mx-auto py-4 justify-center border-y">
        <li
          className="mx-auto flex flex-col items-center"
          onClick={() => pageMovie("information")}
        >
          <img src={i_info} alt="" className="size-6 md:size-8 mb-4" />
          <p>정보</p>
        </li>
        <li
          className="mx-auto flex flex-col items-center"
          onClick={() => pageMovie("product")}
        >
          <img src={i_drinks} alt="" className="size-6 md:size-8 mb-4" />
          <p>주류</p>
        </li>
        <li
          className="mx-auto flex flex-col items-center"
          onClick={() => pageMovie("review")}
        >
          <img src={i_review} alt="" className="size-6 md:size-8 mb-4" />
          <p>리뷰</p>
        </li>
        <li className="mx-auto flex flex-col items-center">
          <img src={i_heart_active} alt="" className="size-6 md:size-8 mb-4" />
          <p>111</p>
        </li>
        <li className="mx-auto flex flex-col items-center">
          <img src={i_bookmark} alt="" className="size-6 md:size-8 mb-4" />
          <p>북마크</p>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
