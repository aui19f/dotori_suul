import picture from "@/assets/images/picture.png";
import i_bookmark from "@/assets/images/bookmark.png";
import i_heart from "@/assets/images/heart.png";
import i_send from "@/assets/images/send.png";
import i_heart_active from "@/assets/images/heart_active.png";
import i_bookmark_active from "@/assets/images/bookmark_active.png";
import { useEffect, useState } from "react";

import dayjs from "dayjs";
import Comment from "@/components/Comment";
import { useNavigate } from "react-router-dom";

export default function HomeBrewDetail() {
  const userData = {
    id: "20",
    nickname: "master",
    likes: { homebrew: [1, 2, 3] },
    bookmarks: { homebrew: [1, 5, 6] },
  };
  const data = {
    id: 2,
    title: "송순주",
    category: "탁주",
    ingredient: [
      {
        isBase: true,
        name: "찹쌀",
        volume: 1000,
        unit: "g",
      },
      {
        name: "누룩",
        volume: 120,
        unit: "g",
        ifFixed: true,
      },
      {
        name: "물",
        volume: 1500,
        unit: "㎖",
      },
      {
        name: "송순",
        volume: 80,
        unit: "g",
      },
    ],

    like: 12,
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    updatedAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    user: {
      email: "",
      nickname: "Master",
    },
    recipe: [
      "찹쌀은 깨끗이 씻어 5~6시간 불린다음 1시간 정도 물을 뺀다.",
      "김이 오른 찜통에 고두밥을 찐다. (60분)",
      "송순은 끓는 물에 살짝 데쳐 낸다.",
      "누룩은 물에 불려 수곡을 만든다.",
      "차게 식힌 고두밥에 수곡을 거른 물과 송순을 넣고 잘 버무려 용기에 담는다.",
      "예의 방법 대로 23℃ 에서 2~3일간 하루 2번 저어준다.",
      "7~10일 후 채주한다.",
    ],
    comment: [
      {
        id: 14,
        user: 20,
        createdAt: new Date(),
        txt: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      },
      {
        id: 11,
        user: null,
        password: "1234",
        createdAt: new Date(),
        txt: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambl",
      },
    ],
  };

  const [like, setLike] = useState(userData.likes.homebrew.includes(data.id));
  const [likeCount, setLikeCount] = useState(data.like);

  const [bookmark, setBookmark] = useState(
    userData.bookmarks.homebrew.includes(data.id)
  );

  const baseItem = data.ingredient.filter((x) => x.isBase)[0];

  const calculateList = [50, 75, 100, 150, 200];
  const [calculate, setCalculate] = useState(100);

  const [baseList, setBaseList] = useState<{ id: number; value: number }[]>([]);

  const [base, setBase] = useState(baseItem.volume);

  const baseClick = ({ id, value }: { id: number; value: number }) => {
    setBase(value);
    setCalculate(id);
  };

  const ratio = (value: number) => {
    return (value * calculate) / 100;
  };

  //Action
  const clickLike = () => {
    setLike((prev) => !prev);
    if (!like) {
      setLikeCount((prev) => prev + 1);
    } else {
      setLikeCount((prev) => prev - 1);
    }
  };

  const clickBookmark = () => setBookmark((prev) => !prev);

  const clickSend = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert("URL을 복사하였습니다.");
    });
  };

  useEffect(() => {
    setBaseList(
      calculateList.map((x) => {
        return { id: x, value: (base * x) / 100 };
      })
    );
  }, []);

  return (
    <div className="max-w-4xl m-auto">
      <div className="border-b border-b-gray-200 pb-8">
        <h2 className="text-4xl">{data.title}</h2>
        <div className="flex mt-2 ">
          <p className="text-gray-400">
            탁주 <span className="mx-1">•</span>BY {data.user.nickname}
            <span className="mx-1">•</span>
            {data.createdAt}
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
                  key={item.id}
                  className={
                    item.value === base
                      ? "p-2 text-center bg-blue-600 text-white"
                      : "p-2 text-center border-r border-r-gray-100 text-gray-400"
                  }
                  onClick={() => baseClick(item)}
                >
                  {item.value}g
                </li>
              ))}
            </ul>
          </div>

          {data.ingredient
            .filter((x) => !x.isBase)
            .map((x, index) => (
              <div key={index} className="flex py-2">
                <p className="w-40">{x.name}</p>
                <p className="flex-1">
                  {x.ifFixed ? x.volume : ratio(x.volume)}
                  {x.unit}
                </p>
              </div>
            ))}
        </div>

        <div className="my-6 grid gap-3">
          <p className="text-2xl">만드는 방법</p>
          {data.recipe.map((list, index) => (
            <p key={index}>
              {index + 1}. {list}
            </p>
          ))}
        </div>

        <div className="flex items-center my-12 border border-gray-400 rounded-full w-fit py-1 px-3">
          <div className="flex items-center" onClick={clickLike}>
            <img
              src={like ? i_heart_active : i_heart}
              alt="like_unchecked"
              className="mr-1 w-5"
            />
            <p className="text-gray-400">{likeCount}</p>
          </div>
          <div className="mx-4" onClick={clickBookmark}>
            <img
              src={bookmark ? i_bookmark_active : i_bookmark}
              alt="bookmark_unchecked"
              className="w-4"
            />
          </div>
          <div onClick={clickSend}>
            <img src={i_send} alt="share" className="w-4" />
          </div>
        </div>
      </div>

      <div className="footer px-4">
        <div className="text-right">
          <textarea
            placeholder="댓글을 작성하세요."
            className="border border-gray-400 w-full h-32 rounded-md p-2"
          ></textarea>
          <button className="bg-cyan-600 text-white px-4 py-2 rounded-md">
            등록
          </button>
        </div>
        <ul>
          {data.comment.map((item) => (
            <Comment key={item.id.toString()} />
          ))}
        </ul>
      </div>
    </div>
  );
}
