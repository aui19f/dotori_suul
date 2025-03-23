import { initAuthListener, useLoginStore } from "@/stores/loginStore";
import { useNavigation } from "@/utils/navigation";
import { useState } from "react";

import i_arrow_right from "@/assets/images/arrow_right.png";
import UpdateUserProfile from "@/components/modal/UpdateUserProfile";
import { useForm } from "react-hook-form";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/fbase";

import * as Sentry from "@sentry/react";
import { useLoadingStore } from "@/stores/loadingStore";

interface IUserUdpateForm {
  nickname?: string;
  password?: string;
  password_check?: string;
}
export default function MyPage() {
  const [isModalNickname, setIsModalNickName] = useState(false);

  const [isModalPassword, setIsModalPassword] = useState(true);
  const { user } = useLoginStore();
  const { isLoading, setLoading } = useLoadingStore();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUserUdpateForm>({
    defaultValues: {
      nickname: user?.nickname,
    },
  });

  const { navigateToCustem } = useNavigation();

  const updateNickanme = async ({ nickname }: IUserUdpateForm) => {
    const newNickname = nickname?.trim();
    if (newNickname === user?.nickname) {
      return false;
    }
    setLoading(true);
    try {
      await updateDoc(doc(db, "user", String(user?.uid)), {
        newNickname,
      });
      await initAuthListener();
      alert("수정되었습니다.");
    } catch (error) {
      // Firebase 에러가 발생한 경우 Sentry로 에러 전송
      console.error("Error updating user nickname: ", error);
      Sentry.captureException({
        message: `Error updating user nickname:  ${error}`,
        extra: {
          userId: user?.uid,
          nickname: user?.nickname,
          newNickname,
        },
      });
      alert(`다시 시도해주시기 바랍니다.`);
    }
    setLoading(false);
    toggelModalNickname();
  };

  const toggelModalNickname = () => setIsModalNickName((prev) => !prev);

  return (
    <div className="p-2">
      <div className="px-2 max-w-[750px] m-auto">
        <h2 className="text-lg font-bold mb-2">My Page</h2>
        <div className="border border-gray-300 rounded-md shadow-md">
          <div
            onClick={toggelModalNickname}
            className="py-3 px-2 border-b border-b-gray-300 flex px-4"
          >
            <p className="flex-1">닉네임</p>
            <p className="flex-1 text-right text-gray-400">{user?.nickname}</p>
          </div>
          <div className="py-3 px-2 border-b border-b-gray-300 flex px-4">
            <p className="flex-1">이메일</p>
            <p className="flex-1 text-right text-gray-400">{user?.email}</p>
          </div>
          <div className="py-3 px-2 border-b border-b-gray-300 flex px-4 items-center">
            <p className="flex-1">비밀번호</p>
            <div className="flex-1 text-right">
              <button className="h-auto p-1">변경하기</button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 max-w-[750px] m-auto mt-4">
        <h2 className="text-lg font-bold mb-2">Post</h2>
        <div className="border border-gray-300 rounded-md shadow-md">
          <div className="py-3 px-2 border-b border-b-gray-300 flex px-4">
            <p className="flex-1">내가 작성한글</p>
            <p className="flex-1 text-right text-gray-400">3</p>
          </div>
          <div className="py-3 px-2 border-b border-b-gray-300 flex px-4">
            <p className="flex-1">좋아요</p>
            <p className="flex-1 text-right text-gray-400">2</p>
          </div>
          <div className="py-3 px-2 border-b border-b-gray-300 flex px-4 items-center">
            <p className="flex-1">북마크</p>
            <p className="flex-1 text-right text-gray-400">1</p>
          </div>
        </div>
      </div>

      {user?.role === "admin" ? (
        <div className="px-2 max-w-[750px] m-auto mt-4">
          <h2 className="text-lg font-bold mb-2">Admin Page</h2>
          <div className="border border-gray-300 rounded-md shadow-md">
            <div
              className="py-3 px-2 border-b border-b-gray-300 flex"
              onClick={() => navigateToCustem("/admin")}
            >
              <p className="flex-1">관리자페이지</p>
              <img
                className="size-4 m-auto"
                src={i_arrow_right}
                alt="관리자 페이지 관리 선택"
              />
            </div>
          </div>
        </div>
      ) : null}

      <UpdateUserProfile
        title={"닉네임변경"}
        show={isModalNickname}
        onClose={toggelModalNickname}
      >
        <form className="p-2 my-2" onSubmit={handleSubmit(updateNickanme)}>
          <input
            type="text"
            className="flex-1 mb-2 shadow-md w-full"
            placeholder="닉네임입력"
            {...register("nickname", {
              required: "필수입력사항입니다.",
              minLength: {
                value: 3,
                message: "3자리보다 커야합니다.",
              },
              maxLength: {
                value: 20,
                message: "20자리보다 작야합니다.",
              },
            })}
          />

          {errors.nickname && (
            <p className="text-error">{errors.nickname.message}</p>
          )}
          <div className="text-right">
            <button className="px-4">확인</button>
          </div>
        </form>
      </UpdateUserProfile>
    </div>
  );
}
