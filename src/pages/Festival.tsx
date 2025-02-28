import List from "@/components/List";

export default function Festival() {
  const data_festival = [
    {
      id: 41,
      title: "대한민국 우리술 대축제",
      homepage: "https://thesool.com/front/home/M000000000/index.do",
      start_date: "",
      end_date: "",
      location: "서울",
      address: "",
      year: 2025,
    },
    {
      id: 42,
      title: "막스포",
      homepage: "https://www.maxpo.co.kr/",
      start_date: "2025.05.23 (금)",
      end_date: "2025.05.25 (일)",
      location: "서울",
      address: "양재AT센터",
      year: 2025,
    },
  ];
  return (
    <div>
      <ul className="grid grid-cols-1 list-hight sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-3 max-w-7xl m-auto">
        {data_festival.map((festival) => (
          <List
            key={festival.id}
            id={festival.id}
            title={festival.title}
            explanation={`${festival.start_date} ~ ${festival.end_date}\n${festival.address}`}
          />
        ))}
      </ul>
    </div>
  );
}
