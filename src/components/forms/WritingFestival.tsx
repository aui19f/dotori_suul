import { useForm } from "react-hook-form";
import i_left from "@/assets/images/arrow_left.png";
import InputAddress from "@/components/forms/InputAddress";
import i_file from "@/assets/images/add_image.png";
import i_close from "@/assets/images/modal_close.png";
import i_test from "@/assets/images/test_brewery_image.jpeg";
import { useNavigation } from "@/utils/navigation";

export default function WritingFestival() {
  const { navigateToCustem } = useNavigation();
  const {} = useForm();
  return (
    <>
      <div className="flex items-center mb-2 border-b border-gray-100 pb-2">
        <div
          onClick={() => navigateToCustem("/admin")}
          className="size-6  bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${i_left})` }}
        ></div>

        <h3 className="font-bold text-gray-400">대축제 등록</h3>
      </div>

      <form className="m-auto max-w-3xl px-2 py-4 flex flex-col gap-3">
        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">이름</p>
          <input type="text" className="w-full md:w-3/4" />
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">소개</p>
          <textarea className="w-full md:w-3/4" />
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">일시</p>
          <div className="flex w-full md:w-3/4 gap-2 items-center">
            <input type="text" className="flex-1" />
            <span>~</span>
            <input type="text" className="flex-1" />
          </div>
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">장소</p>
          <div className="w-full md:w-3/4">
            <div className="flex mb-1">
              <input type="text" className="mr-1 flex-1" />
              <InputAddress />
            </div>
            <input type="text" className="w-full" placeholder="상세주소" />
          </div>
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">금액</p>
          <input type="text" className="w-full md:w-3/4" />
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">주최</p>
          <input type="text" className="w-full md:w-3/4" />
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">연락처</p>
          <input type="text" className="w-full md:w-3/4" />
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">홈페이지</p>
          <input type="text" className="w-full md:w-3/4" />
        </div>
        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">포스터</p>
          <div className="flex w-full flex-col md:w-3/4">
            <img src={i_file} alt="이미지 추가" className="size-12" />
          </div>
        </div>
      </form>

      <div className="fixed bg-gray-50 h-12 bottom-0 right-0 left-8 md:left-40 flex items-center justify-end ">
        <button
          type="submit"
          className="bg-blue-400 border border-blue-400 text-white mr-2 h-auto px-3 py-1"
        >
          저장
        </button>
      </div>
    </>
  );
}
