import i_suul_title from "@/assets/images/suul_title.png";
import i_suul_description from "@/assets/images/suul_description.png";
import i_suul_category from "@/assets/images/suul_category.png";
import i_suul_standards from "@/assets/images/suul_standards.png";

import i_suul_abv from "@/assets/images/suul_abv.png";

import i_suul_material from "@/assets/images/suul_material.png";

import i_suul_storage from "@/assets/images/suul_storage.png";

export default function SuulInfo() {
  const data = {
    id: 201,
    title: "에피소드 생막걸리",
    category: "탁주",
    standards: "750ml",
    abv: "9%",
    description:
      "에피소드는 평택산 쌀베이스에 다양한 부재료들이 오묘한 맛과 향의 조화를 이룹니다.<br/>은은한 꽃향기와 달콤하고 부드러운 바디감, 깔끔한 피니쉬가 매력적입니다.<br/>9도 본연의 맛으로 진하게 또는 가볍게 하이볼 스타일로 다양한게 즐길수 있습니다.",
    images: [],
    material: [
      { name: "정제수", content: "" },
      { name: "찹쌀(국내산)", content: "10.2%" },
      { name: "맵쌀(국내산)", content: "" },
      { name: "입국(국내산)", content: "" },
      { name: "곡지(밀)", content: "" },
      { name: "밀 함유", content: "" },
    ],
    storage: "0℃~10℃이하 세워서 냉장보관",
  };

  return (
    <ul className="grid gap-4">
      <li className="flex">
        <img src={i_suul_title} alt="" className="size-4 mr-2" />
        <p className="w-32">이름</p>
        <p className="flex-1">{data.title}</p>
      </li>

      <li className="flex">
        <img src={i_suul_description} alt="" className="size-5 mr-2 " />
        <p className="w-32">소개</p>
        <p className="flex-1 whitespace-pre-line">
          {data.description.replace(/<br\/>/gi, "\n")}
        </p>
      </li>

      <li className="flex">
        <img src={i_suul_category} alt="" className="size-4 mr-2" />
        <p className="w-32">주종</p>
        <p className="flex-1">{data.category}</p>
      </li>

      <li className="flex">
        <img src={i_suul_standards} alt="" className="size-4 mr-2" />
        <p className="w-32">규격</p>
        <p className="flex-1">{data.standards}</p>
      </li>

      <li className="flex">
        <img src={i_suul_abv} alt="" className="size-4 mr-2" />
        <p className="w-32">도수</p>
        <p className="flex-1">{data.abv}</p>
      </li>

      <li className="flex">
        <img src={i_suul_material} alt="" className="mt-1 size-4 mr-2" />
        <p className="w-32">원재료 및 함량</p>

        <div className="flex-1">
          {data.material.map((x) => (
            <p>
              {x.name}
              {x.content && <span> {x.content}</span>}
            </p>
          ))}
        </div>
      </li>

      <li className="flex">
        <img src={i_suul_storage} alt="" className="size-4 mr-2" />
        <p className="w-32">보관법</p>
        <p className="flex-1">{data.storage}</p>
      </li>
    </ul>
  );
}
