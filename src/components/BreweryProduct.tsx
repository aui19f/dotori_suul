import List from "@/components/List";

export default function BreweryProduct() {
  const data = [
    {
      id: 201,
      title: "에피소드 생막걸리",
      category: "탁주",
      standards: "750ml",
      abv: "9%",
      description:
        "에피소드는 평택산 쌀베이스에 다양한 부재료들이 오묘한 맛과 향의 조화를 이룹니다.<br/>은은한 꽃향기와 달콤하고 부드러운 바디감, 깔끔한 피니쉬가 매력적입니다.<br/><br/>9도 본연의 맛으로 진하게 또는 가볍게 하이볼 스타일로 다양한게 즐길수 있습니다.",
    },
    {
      id: 202,
      title: "호락이배꼽 말걸리",
      category: "탁주",
      standards: "720ml",
      abv: "6.5%",
      description:
        "와인 기법으로 빚은 내추럴 막걸리<br/>시원한 배맛 & 은은한 꿀향 100일 발효의 정성",
    },
    {
      id: 203,
      title: "웃는 호랑이 [소호 소주] 56%",
      category: "증류주",
      standards: "500ml",
      abv: "56%",
      description: "달항아리 6년 숙성 (Unfiltered, Aged, Natural)",
    },
    {
      id: 203,
      title: "웃는 호랑이 [소호 소주] 56%",
      category: "증류주",
      standards: "500ml",
      abv: "56%",
      description: "달항아리 6년 숙성 (Unfiltered, Aged, Natural)",
    },
    {
      id: 204,
      title: "웃는 호랑이 [소호 소주] 36.5%",
      category: "증류주",
      standards: "200ml",
      abv: "36.5%",
      description: "달항아리 3년 숙성 (Unfiltered, Aged, Natural)",
    },
  ];
  return (
    <div>
      <ul className="list-square text-lien-2 max-w-7xl px-2 m-auto grid gap-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {data.map((item) => (
          <li key={item.id}>
            <List
              id={item.id}
              title={item.title}
              explanation={item.description.replace(/<br\/>/gi, "\n")}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
