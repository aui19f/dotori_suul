import picture from "@/assets/images/picture.png";
import bookmark from "@/assets/images/bookmark.png";
import heart from "@/assets/images/heart.png";
import send from "@/assets/images/send.png";
import { useEffect, useState } from "react";

export default function HomeBrewDetail() {
  const [baseList, setBaseList] = useState([500, 1000, 1500, 2000]);
  const [base, setBase] = useState(1000);

  const baseClick = (num: number) => {
    setBase(num);
  };

  const ratio = (standard: number, calculate: number) => {
    return (standard * calculate) / 100;
  };

  useEffect(() => {
    const calculateList = [50, 75, 100, 150, 200];
    setBaseList(calculateList.map((x) => ratio(base, x)));
  }, []);

  return (
    <div className="max-w-4xl m-auto px-8 py-2">
      <div className="border-b border-b-gray-200 pb-8">
        <h2 className="text-4xl">송순주</h2>
        <div className="flex mt-2 ">
          <p className="text-gray-400">
            탁주 <span className="mx-1">•</span>BY 수지
            <span className="mx-1">•</span>2025/02/15 17:13
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-gray-50 p-2">
          <img src={picture} alt="" className="w-full" />
        </div>
        <div className="ingredient my-6">
          <p className="text-2xl">재료</p>
          <div className="flex items-center py-2">
            <p className="w-40">찹쌀</p>
            <ul className="flex-1 grid grid-cols-5 border border-gray-100">
              {baseList.map((item) => (
                <li
                  className={
                    item === base
                      ? "p-2 text-center bg-blue-600 text-white"
                      : "p-2 text-center border-r border-r-gray-100 text-gray-400"
                  }
                  onClick={() => baseClick(item)}
                >
                  {item}g
                </li>
              ))}
            </ul>
          </div>

          <div className="flex py-2">
            <p className="w-40">누룩</p>
            <p className="flex-1">120g</p>
          </div>

          <div className="flex py-2">
            <p className="w-40">송순</p>
            <p className="flex-1">80g</p>
          </div>
          <div className="flex py-2">
            <p className="w-40">물</p>
            <p className="flex-1">1500㎖</p>
          </div>
        </div>
        <div className="recipe my-6 grid gap-3">
          <p className="text-2xl">만드는 방법</p>
          <p>1. 찹쌀은 깨끗이 씻어 5~6시간 불린다음 1시간 정도 물을 뺀다.</p>
          <p>2. 김이 오른 찜통에 고두밥을 찐다. (60분)</p>
          <p>3. 송순은 끓는 물에 살짝 데쳐 낸다.</p>
          <p>4. 누룩은 물에 불려 수곡을 만든다.</p>
          <p>
            5. 차게 식힌 고두밥에 수곡을 거른 물과 송순을 넣고 잘 버무려 용기에
            담는다.
          </p>
          <p>6. 예의 방법 대로 23℃ 에서 2~3일간 하루 2번 저어준다.</p>
          <p>7. 7~10일 후 채주한다.</p>
        </div>

        <div className="actions">
          <div>
            <div></div>
            <p>000</p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="footer">
        <ul>
          <li>
            <div>작성자,내용,작성일,버튼</div>
          </li>
        </ul>
        <div>
          <textarea></textarea>
          <button>등록</button>
        </div>
      </div>
    </div>
  );
}
