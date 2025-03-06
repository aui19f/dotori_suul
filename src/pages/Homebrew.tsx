import List from "@/components/List";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IHomebrew {
  id: string;
  title: string;
  category: string;
  ingredient: string[];
  link: number;
  createdAt: Date;
  updatedAt: Date;
  user: string;
}

const testData: IHomebrew[] = [
  {
    id: "1",
    title: "부의주",
    category: "탁주",
    ingredient: ["찹쌀", "누룩", "물"],
    link: 9,
    createdAt: new Date(),
    updatedAt: new Date(),
    user: "master",
  },
  {
    id: "2",
    title: "송순주",
    category: "탁주",
    ingredient: ["찹쌀", "누룩", "물", "송순"],
    link: 12,
    createdAt: new Date(),
    updatedAt: new Date(),
    user: "master",
  },
  {
    id: "3",
    title: "감귤막걸리",
    category: "탁주",
    ingredient: ["찹쌀", "누룩", "물", "귤"],
    link: 21,
    createdAt: new Date(),
    updatedAt: new Date(),
    user: "master",
  },
];

export default function Homebrew() {
  const navi = useNavigate();
  const [homebrewList, setHomeBrewList] = useState<IHomebrew[]>([]);
  const pageMove = (id: string) => {
    navi(`homebrew/${id}`);
  };
  return (
    <>
      <ul className="list-width grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 max-w-7xl m-auto p-2">
        {testData.map((item) => (
          <li key={item.id} onClick={() => pageMove(item.id)}>
            <List
              id={item.id}
              title={item.title}
              explanation={`[${item.category}] ${item.ingredient.toString()}`}
              dateAt={item.createdAt.toLocaleDateString()}
              user={item.user}
            />
          </li>
        ))}
      </ul>
      <div className="fixed bottom-2 right-2 size-10 bg-blue-400 rounded-full"></div>
    </>
  );
}
