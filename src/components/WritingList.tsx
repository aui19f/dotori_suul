interface IWriting {
  id: number;
  title: string;
  explanation: string;
  createdAt: string;
  user: string;
}

export default function WritingList({
  id,
  title,
  explanation,
  createdAt,
  user,
}: IWriting) {
  return (
    <li className="border border-gray-400 rounded-md">
      <div>
        <div className="bg-gray-50 rounded-md thumb-area"></div>

        <div className=" p-2">
          <h4 className="text-xl text-lien-1">{title}</h4>

          <p className="felx-1 text-lien-2 h-12 text-neutral-400">
            {explanation}
          </p>

          <div className="pt-4">
            <p className="text-gray-300 text-sm">{createdAt}</p>
          </div>
        </div>
        <div className="flex p-1 border-t border-gray-300 px-2">
          <p className="flex-1">{user}</p>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </li>
  );
}
