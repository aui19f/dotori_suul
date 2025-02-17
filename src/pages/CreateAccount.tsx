import kakao from "@/assets/images/kakaotalk.png";
import google from "@/assets/images/google.png";
import facebook from "@/assets/images/facebook.png";
import naver from "@/assets/images/naver.png";
import logo from "@/assets/images/logo.png";
import { useState } from "react";

export default function CreateAccount() {
  const [isErr, setIsErr] = useState(false);
  return (
    <div className="bg-gray-100 fixed h-full w-full flex items-center justify-center">
      <div className="bg-gray-50 p-10 w-96 shadow-md rounded-md">
        <div className="flex items-end mb-4">
          <img className="size-16" src={logo} alt="Logo" />
          <h1 className="text-lg">회원가입</h1>
        </div>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="이메일"
            className="border border-gray-400 h-12 pl-2 pr-1 mb-3"
          />

          <input
            type="password"
            name=""
            id=""
            placeholder="비밀번호"
            className="border border-gray-400 h-12 pl-2 pr-1 mb-3"
          />

          <input
            type="password"
            name=""
            id=""
            placeholder="비밀번호 확인"
            className="border border-gray-400 h-12 pl-2 pr-1 mb-3"
          />

          {isErr && <p className="text-red-600 text-sm mb-3">메시지</p>}

          <button className="h-12 bg-blue-600 text-white">회원가입</button>
        </form>

        <div className="my-8 flex items-center">
          <div className="flex-1  border-t border-gray-400  mr-1"></div>
          <p className="text-gray-400">또는</p>
          <div className="flex-1  border-t border-gray-400  ml-1"></div>
        </div>

        <ul className="grid grid-cols-4 gap-8">
          <li>
            <img className="size-8 m-auto" src={kakao} alt="Logo" />
          </li>
          <li>
            <img className="size-8 m-auto" src={google} alt="Logo" />
          </li>
          <li>
            <img className="size-8 m-auto" src={facebook} alt="Logo" />
          </li>
          <li>
            <img className="size-8 m-auto" src={naver} alt="Logo" />
          </li>
        </ul>

        <div className="flex justify-center mt-8">
          <p className="text-sm mr-2">이미 가입한 회원이신가요? </p>
          <p className="text-sm underline cursor-pointer hover:text-blue-600">
            로그인
          </p>
        </div>
      </div>
    </div>
  );
}
