import kakao from "@/assets/images/kakaotalk.png";
import google from "@/assets/images/google.png";
import facebook from "@/assets/images/facebook.png";
import naver from "@/assets/images/naver.png";
import logo from "@/assets/images/logo.png";

import { useNavigation } from "@/utils/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { ILoginForm } from "@/interfaces/User";

import { useLoadingStore } from "@/stores/loadingStore";
import Loading from "@/components/layout/Loading";
import { auth } from "@/fbase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const { navigateToBack, navigateToCreateAccount } = useNavigation();
  const isLoading = useLoadingStore((state) => state.isLoading);
  const setLoading = useLoadingStore((state) => state.setLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ILoginForm>();

  const onSubmit = async ({ email, password }: ILoginForm) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigateToBack();
    } catch (error) {
      console.log("[[[Error]]]", error);
    }
  };

  return (
    <>
      {isLoading && <Loading />}

      <div className="bg-white sm:bg-gray-100 h- w-screen min-h-screen grid place-content-center">
        <div className="bg-white w-screen sm:w-96 py-12 px-4 rounded-md ">
          <div className="flex items-end mb-4">
            <img className="size-16" src={logo} alt="Logo" />
            <h1 className="text-lg">로그인</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <input
              type="text"
              {...register("email", {
                required: "필수입력사항입니다.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  message: "이메일 형식이 아닙니다.",
                },
              })}
              placeholder="이메일"
              className="border border-gray-400 h-12 pl-2 pr-1 mb-3"
            />

            {errors.email && (
              <p className="text-red-600 text-sm mb-3">
                {errors.email?.message}
              </p>
            )}

            <input
              type="password"
              {...register("password", { required: "필수입력사항입니다." })}
              placeholder="비밀번호"
              className="border border-gray-400 h-12 pl-2 pr-1 mb-3"
            />

            {errors.password && (
              <p className="text-red-600 text-sm mb-3">
                {errors.password?.message}
              </p>
            )}

            <button className="h-12 bg-blue-600 text-white">로그인</button>
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
            <p className="text-sm mr-2">계정이 없나요? </p>
            <p
              onClick={navigateToCreateAccount}
              className="text-sm underline cursor-pointer hover:text-blue-600"
            >
              회원가입
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
