import kakao from "@/assets/images/kakaotalk.png";
import google from "@/assets/images/google.png";
import facebook from "@/assets/images/facebook.png";
import naver from "@/assets/images/naver.png";
import logo from "@/assets/images/logo.png";
import { useEffect, useState } from "react";
import { useNavigation } from "@/utils/navigation";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import { ICreateAccountForm } from "@/interfaces/User";
import { UserRole } from "@/components/enums/UserRole.enum";
import { FirebaseError } from "firebase/app";
import { useLoadingStore } from "@/stores/loadingStore";
import Loading from "@/components/layout/Loading";
import { auth, db } from "@/fbase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function CreateAccount() {
  const { navigateToLogin, navigateToBack } = useNavigation();
  const setLoading = useLoadingStore((state) => state.setLoading);
  const isLoading = useLoadingStore((state) => state.isLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ICreateAccountForm>();

  const onSubmit = async ({
    email,
    password,
    password2,
  }: ICreateAccountForm) => {
    if (password !== password2) {
      setError("password2", {
        message: "입력한 비밀번호와 같아야합니다.",
      });
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userData = userCredential.user;

      await setDoc(doc(db, "user", uuidv4()), {
        email,
        nicakname: email.split("@")[0],
        like: {
          homebrew: [],
          brewery: [],
          suul: [],
        },
        bookmark: {
          homebrew: [],
          brewery: [],
          suul: [],
          festival: [],
        },
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
        role: UserRole.Guest,
      });

      alert("가입이 완료되었습니다.");

      setLoading(false);
      navigateToBack();
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.code, error.message);
      }
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="bg-white sm:bg-gray-100 h- w-screen min-h-screen grid place-content-center">
        <div
          className="bg-white w-screen sm:w-96 py-12 px-4 rounded-md 
      "
        >
          <div className="flex items-end mb-4">
            <img className="size-16" src={logo} alt="Logo" />
            <h1 className="text-lg">회원가1입</h1>
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="이메일"
              className="border border-gray-400 h-12 pl-2 pr-1 mb-3"
              {...register("email", {
                required: "필수입력사항입니다.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  message: "이메일 형식이 아닙니다.",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mb-3">
                {errors.email?.message}
              </p>
            )}

            <input
              type="password"
              name=""
              id=""
              placeholder="비밀번호"
              className="border border-gray-400 h-12 pl-2 pr-1 mb-3"
              {...register("password", {
                required: "필수입력사항입니다.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 8자 이상이여야 합니다,",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600 text-sm mb-3">
                {errors.password?.message}
              </p>
            )}

            <input
              type="password"
              name=""
              id=""
              placeholder="비밀번호 확인"
              className="border border-gray-400 h-12 pl-2 pr-1 mb-3"
              {...register("password2", {
                required: "필수입력사항입니다.",
              })}
            />
            {errors.password2 && (
              <p className="text-red-600 text-sm mb-3">
                {errors.password2?.message}
              </p>
            )}

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
            <p
              onClick={navigateToLogin}
              className="text-sm underline cursor-pointer hover:text-blue-600"
            >
              로그인
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
