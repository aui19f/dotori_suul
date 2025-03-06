import { Outlet } from "react-router-dom";
import i_review from "@/assets/images/review.png";
import i_like from "@/assets/images/heart_active.png";
import i_bookmark from "@/assets/images/bookmark_active.png";
import i_rating from "@/assets/images/rating.png";
import i_comments from "@/assets/images/comments.png";
import { useNavigation } from "@/utils/navigation";

// dashboard, 양조장, 우리술, 대축제 업데이트작성,
export default function AdminDashBoard() {
  const { navigateToCustem } = useNavigation();
  const writing = (id: string) => {
    navigateToCustem(`writing/${id}`);
  };
  const list = (id: string) => {
    navigateToCustem(`writing/list/${id}`);
  };
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <div className="flex items-center mb-4">
          <p className="font-bold  flex-1">양조장</p>
          <button
            onClick={() => list("brewery")}
            className="text-sm h-fit p-1 border border-gray-200 bg-gray-200 rounded-md text-gray-400 mr-1"
          >
            전체보기
          </button>

          <button
            onClick={() => writing("brewery")}
            className="text-sm h-fit p-1 border border-gray-200 rounded-md"
          >
            글작성
          </button>
        </div>
        <ul className="border-b-gray-400">
          <li className="flex items-center border-b border-b-100 py-2">
            <img src={i_like} alt="" className="size-4" />
            <p className="flex-1 mx-2 text-sm">글제목</p>
            <p>N</p>
          </li>
          <li className="flex items-center border-b border-b-100 py-2">
            <img src={i_bookmark} alt="" className="size-4" />
            <p className="flex-1 mx-2 text-sm">글제목</p>
            <p>N</p>
          </li>
          <li className="flex items-center py-2">
            <img src={i_rating} alt="" className="size-4" />
            <p className="flex-1 mx-2 text-sm">글제목</p>
            <p>N</p>
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <div className="flex items-center mb-4">
          <p className="font-bold flex-1">우리술</p>
          <button
            onClick={() => writing("brewery")}
            className="text-sm h-fit p-1 border border-gray-200 bg-gray-200 rounded-md text-gray-400 mr-1"
          >
            전체보기
          </button>
          <button
            onClick={() => writing("suul")}
            className="text-sm h-fit p-1 border border-gray-200 rounded-md"
          >
            글작성
          </button>
        </div>

        <ul className="border-b-gray-400">
          <li className="flex items-center border-b border-b-100 py-2">
            <img src={i_like} alt="" className="size-4" />
            <p className="flex-1 mx-2 text-sm">글제목</p>
            <p>N</p>
          </li>
          <li className="flex items-center border-b border-b-100 py-2">
            <img src={i_bookmark} alt="" className="size-4" />
            <p className="flex-1 mx-2 text-sm">글제목</p>
            <p>N</p>
          </li>
          <li className="flex items-center py-2">
            <img src={i_rating} alt="" className="size-4" />
            <p className="flex-1 mx-2 text-sm">글제목</p>
            <p>N</p>
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <div className="flex items-center mb-4">
          <p className="font-bold flex-1">대축제</p>
          <button
            onClick={() => writing("brewery")}
            className="text-sm h-fit p-1 border border-gray-200 bg-gray-200 rounded-md text-gray-400 mr-1"
          >
            전체보기
          </button>
          <button
            onClick={() => writing("festival")}
            className="text-sm h-fit p-1 border border-gray-200 rounded-md"
          >
            글작성
          </button>
        </div>
        <ul className="border-b-gray-400">
          <li className="flex items-center border-b border-b-100 py-2">
            <img src={i_like} alt="" className="size-4" />
            <p className="flex-1 mx-2 text-sm">글제목</p>
            <p>N</p>
          </li>
          <li className="flex items-center border-b border-b-100 py-2">
            <img src={i_bookmark} alt="" className="size-4" />
            <p className="flex-1 mx-2 text-sm">글제목</p>
            <p>N</p>
          </li>
          <li className="flex items-center py-2">
            <img src={i_comments} alt="" className="size-4" />
            <p className="flex-1 mx-2 text-sm">글제목</p>
            <p>N</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
