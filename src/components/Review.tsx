import i_user from "@/assets/images/user.png";
import i_star from "@/assets/images/star.png";
import i_star_gray from "@/assets/images/star_gray_100.png";
import i_like_line from "@/assets/images/like_line.png";

import dayjs from "dayjs";

interface IReview {
  id: number;
  user: string;
  review: string;
  dateAt: string;
  score: number;
  like: number;
}
export default function Review({ id, user, score, like }: IReview) {
  const ratingStar = (checked: number) => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      result.push(i < checked);
    }
    return result;
  };
  return (
    <li className="mt-8">
      <div className="flex items-center">
        <img src={i_user} alt="" className="w-8 mr-2" />
        <p className="flex-1">{user} </p>
        <div className="flex mr-4">
          {ratingStar(score).map((x) => (
            <img
              src={x ? `${i_star}` : `${i_star_gray}`}
              className="size-4 ml-1"
            />
          ))}
        </div>
        <div className="flex mr-4">
          <img src={i_like_line} alt="" className="size-6 mr-1" />
          <p>{like}</p>
        </div>
        <button className="text-sm border border-gray-300 text-gray-300 p-1 rounded-lg">
          삭제(조건문)
        </button>
      </div>

      <div className="px-10 py-2">
        <p className="text-gray-500">
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions o
        </p>
        <p className="text-right text-sm text-gray-500">
          {dayjs().format("YYYY-MM-DD HH:mm:ss")}
        </p>
      </div>
    </li>
  );
}
