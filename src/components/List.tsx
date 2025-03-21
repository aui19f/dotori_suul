import i_bookmark from "@/assets/images/bookmark.png";
import i_bookmark_active from "@/assets/images/bookmark_active.png";
import i_heart from "@/assets/images/heart.png";

import i_heart_active from "@/assets/images/heart_active.png";

interface IWriting {
  id: number;
  title: string;
  explanation: string;
  like?: number;
  dateAt?: string;
  user?: string;
  tag?: string;
  tagName?: string;
}

export default function List({
  id,
  title,
  explanation,
  dateAt,
  user,
  tag,
  like,
  tagName,
}: IWriting) {
  return (
    <div className="border border-gray-200 shadow-md">
      <div className="bg-gray-200 thumb-area "></div>

      <div className="flex p-2">
        <div className="flex-1">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="explanation text-gray-600 whitespace-pre-line">
            {explanation}
          </p>
          <div className="pt-4">
            <p className="text-gray-300 text-sm">{dateAt}</p>
          </div>
        </div>

        <div className="flex h-4">
          {like && (
            <div className="flex items-center">
              <img src={i_heart_active} alt="" className="size-4" />
              <p className="text-sm text-gray-400">{like}</p>
            </div>
          )}
          <img src={i_bookmark} alt="" className="size-4" />
        </div>
      </div>

      {user && (
        <div className="p-2">
          <p>{user}</p>
        </div>
      )}
      {tag && (
        <div className="flex p-2 ">
          <div className="border rounded-xl bg-blue-400 px-2 py-1 w-fit">
            <p className="text-sm text-white">{tagName}</p>
          </div>
          {/* <div className="border rounded-xl border-blue-400 px-2 py-1 w-fit">
            <p className="text-sm text-blue-400">예약방문</p>
          </div> */}
        </div>
      )}
    </div>
  );
}
