import BreweryInformation from "@/components/BreweryInfo";
import ImageSlider from "@/components/ImageSlider";

import i_modal_close from "@/assets/images/modal_close.png";

import { useNavigate } from "react-router-dom";
import SuulInfomation from "@/components/SuulInfo";
export default function SuulDetail() {
  const navi = useNavigate();
  const closeModal = () => {
    navi("/suul");
  };
  return (
    <div className="w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md max-w-4xl h-4/5 overflow-hidden">
        <div className="flex items-center h-14 px-4">
          <h2 className="flex-1  text-xl font-bold">
            [Premium Soho Soju ] 소호56 [원산지:국산(경기도 평택시)]
          </h2>
          <div onClick={closeModal}>
            <img src={i_modal_close} alt="" className="size-4" />
          </div>
        </div>

        <div className="h-[calc(100%-56px)] overflow-auto ">
          <ImageSlider />

          <div className="p-4">
            <div className="">
              <p className="text-xl font-bold mb-4">술기본정보</p>
              <SuulInfomation />
            </div>
            <div>
              <p className="text-xl font-bold mt-6 mb-4">양조장</p>
              <BreweryInformation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
