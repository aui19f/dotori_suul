export enum Visit {
  regular = "상시방문",
  reserved = "예약방문",
}

export interface IFormBrewery {
  id?: string;
  store: string;

  summary: string;

  address: string;
  detailedAddress: string;
  sido: string;

  homepage: string;

  visit: Visit;
  isTourism: boolean;
  images?: string[];
}

export interface IBrewery {
  id: string;
  address: string;
  images: [];
  homepage: string;
  sido: string;
  visit: string; //"reserved";
  store: string; //"호랑이배꼽양조장(밝은세상영농조합)";
  summary: string; // "기상하는 호랑이 형상 한반도의 배꼽자리, 경기도 평택의 자연을 담아 우리술을 빚습니다.";
  detailedAddress: string; //"호랑이배꼽양조장 (밝은세상영농조합)";
  isTourism: boolean;
  userId: string; //"RJa2XtFOaiZki7q6Ol4DDKVRzCZ2";
  updatedAt: number; //1742385234622;
  createdAt: number; //1742385234622;
}
