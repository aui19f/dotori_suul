import i_user from "@/assets/images/user.png";
import dayjs from "dayjs";
export default function Comment() {
  return (
    <li className="mt-8">
      <div className="flex items-center">
        <img src={i_user} alt="" className="w-8 mr-2" />
        <p className="flex-1">NICKNAME </p>
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
