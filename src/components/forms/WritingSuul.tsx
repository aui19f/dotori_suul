import { useNavigation } from "@/utils/navigation";
import { useForm } from "react-hook-form";
import i_left from "@/assets/images/arrow_left.png";
import i_test from "@/assets/images/test_brewery_image.jpeg";
import i_close from "@/assets/images/modal_close.png";
import i_file from "@/assets/images/add_image.png";
export default function WritingSuul() {
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
        <h3 className="font-bold text-gray-400">우리술 등록</h3>
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
          <p className="md:w-1/4 md:mb-0">주종</p>
          <div className="flex w-full md:w-3/4 ">
            <label className="input-radio mr-4">
              탹주
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="input-radio">
              청/약주
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>

            <label className="input-radio">
              증류주
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>

            <label className="input-radio">
              과실주
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>

            <label className="input-radio">
              기타
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">규격</p>
          <input type="text" className="w-full md:w-3/4" />
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">도수</p>
          <input type="text" className="w-full md:w-3/4" />
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">원재료 및 함량</p>
          <ul type="text" className="w-full md:w-3/4">
            <li>
              <input type="text" />
              <input type="text" />
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">보관법</p>
          <textarea className="w-full md:w-3/4" />
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">이미지</p>
          <div className="w-full flex flex-col md:w-3/4">
            <ul className="flex gap-3 flex-wrap">
              <li className="bg-gray-50 size-16 flex items-center justify-center rounded-md">
                <img src={i_file} alt="이미지 추가" className="size-12" />
              </li>
              <li className="bg-gray-400 size-16 flex items-center justify-center rounded-md">
                <div className="size-16 relative">
                  <div className="absolute -right-px -top-px bg-gray-100 p-1 bg-opacity-80 cursor-pointer">
                    <img src={i_close} alt="이미지삭제" className=" size-3 " />
                  </div>
                  <img
                    src={i_test}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </li>
              <li className="bg-gray-400 size-16 flex items-center justify-center rounded-md">
                <div className="size-16 relative">
                  <div className="absolute -right-px -top-px bg-gray-100 p-1 bg-opacity-80 cursor-pointer">
                    <img src={i_close} alt="이미지삭제" className=" size-3 " />
                  </div>
                  <img
                    src={i_test}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </li>
              <li className="bg-gray-400 size-16 flex items-center justify-center rounded-md">
                <div className="size-16 relative">
                  <div className="absolute -right-px -top-px bg-gray-100 p-1 bg-opacity-80 cursor-pointer">
                    <img src={i_close} alt="이미지삭제" className=" size-3 " />
                  </div>
                  <img
                    src={i_test}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </li>
              <li className="bg-gray-400 size-16 flex items-center justify-center rounded-md">
                <div className="size-16 relative">
                  <div className="absolute -right-px -top-px bg-gray-100 p-1 bg-opacity-80 cursor-pointer">
                    <img src={i_close} alt="이미지삭제" className=" size-3 " />
                  </div>
                  <img
                    src={i_test}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </li>
              <li className="bg-gray-400 size-16 flex items-center justify-center rounded-md">
                <div className="size-16 relative">
                  <div className="absolute -right-px -top-px bg-gray-100 p-1 bg-opacity-80 cursor-pointer">
                    <img src={i_close} alt="이미지삭제" className=" size-3 " />
                  </div>
                  <img
                    src={i_test}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </li>
              <li className="bg-gray-400 size-16 flex items-center justify-center rounded-md">
                <div className="size-16 relative">
                  <div className="absolute -right-px -top-px bg-gray-100 p-1 bg-opacity-80 cursor-pointer">
                    <img src={i_close} alt="이미지삭제" className=" size-3 " />
                  </div>
                  <img
                    src={i_test}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </li>
              <li className="bg-gray-400 size-16 flex items-center justify-center rounded-md">
                <div className="size-16 relative">
                  <div className="absolute -right-px -top-px bg-gray-100 p-1 bg-opacity-80 cursor-pointer">
                    <img src={i_close} alt="이미지삭제" className=" size-3 " />
                  </div>
                  <img
                    src={i_test}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </li>
              <li className="bg-gray-400 size-16 flex items-center justify-center rounded-md">
                <div className="size-16 relative">
                  <div className="absolute -right-px -top-px bg-gray-100 p-1 bg-opacity-80 cursor-pointer">
                    <img src={i_close} alt="이미지삭제" className=" size-3 " />
                  </div>
                  <img
                    src={i_test}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </li>
              <li className="bg-gray-400 size-16 flex items-center justify-center rounded-md">
                <div className="size-16 relative">
                  <div className="absolute -right-px -top-px bg-gray-100 p-1 bg-opacity-80 cursor-pointer">
                    <img src={i_close} alt="이미지삭제" className=" size-3 " />
                  </div>
                  <img
                    src={i_test}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </li>
              <li className="bg-gray-400 size-16 flex items-center justify-center rounded-md">
                <div className="size-16 relative">
                  <div className="absolute -right-px -top-px bg-gray-100 p-1 bg-opacity-80 cursor-pointer">
                    <img src={i_close} alt="이미지삭제" className=" size-3 " />
                  </div>
                  <img
                    src={i_test}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </li>
            </ul>
            <p className="text-sm text-gray-400">최대 10장까지 가능합니다.</p>
          </div>
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">양조장</p>
          <button type="button">불러오기</button>
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
