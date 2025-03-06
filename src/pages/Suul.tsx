import List from "@/components/List";
import { Outlet, useNavigate } from "react-router-dom";

export default function Suul() {
  const data_suul = [
    {
      id: 31,
      standards: "750ml",
      abv: "7",
      title: "입장탁주",
      manufacturer: "(농) 입장주조㈜",
    },
    {
      id: 32,
      standards: "500ml",
      abv: "30",
      title: "톡 한잔 소주",
      manufacturer: "(농)(유)대마주조",
      ingredient: "국내산 보리, 쌀",
    },
    {
      id: 33,
      standards: "360ml",
      abv: "6",
      title: "자연담은 복분자막걸리",
      manufacturer: "(농)국순당고창명주㈜",
      ingredient: "국내산 복분자(고창), 정제수",
    },
    {
      id: 34,
      standards: "600ml, 800ml",
      abv: "45",
      title: "로얄 안동소주",
      manufacturer: "(농)유토피아㈜",
      ingredient: "국내산 쌀",
    },
    {
      id: 35,
      standards: "500ml",
      abv: "17",
      title: "지란지교",
      manufacturer: "(유)친구들의 술 지란지교",
      ingredient: "찹쌀,멥쌀,전통누룩(밀),정제수",
    },
  ];
  const navi = useNavigate();
  const detail = (id: number) => {
    console.log(id);
    navi(`${id}`);
  };
  return (
    <>
      <ul className="list-square max-w-7xl m-auto grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-2">
        {data_suul.map((suul) => (
          <li key={suul.id} onClick={() => detail(suul.id)}>
            <List
              id={suul.id}
              title={suul.manufacturer}
              explanation={`${suul.standards} / ${suul.abv}%`}
              user={suul.manufacturer}
              like={100}
            />
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
