import { useForm } from "react-hook-form";
import i_left from "@/assets/images/arrow_left.png";
import InputAddress, { IDaumAddress } from "@/components/forms/InputAddress";
import i_file from "@/assets/images/add_image.png";
import i_close from "@/assets/images/modal_close.png";
import i_test from "@/assets/images/test_brewery_image.jpeg";
import { useNavigation } from "@/utils/navigation";
import { IFormBrewery } from "@/interfaces/Brewery";
import { useEffect, useState } from "react";
import { auth, db, storage } from "@/fbase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useLoadingStore } from "@/stores/loadingStore";

interface Props {
  id: string;
}

export default function WritingBrewery({ id }: Props) {
  const setLoading = useLoadingStore((state) => state.setLoading);

  const [uuid, setUuid] = useState(uuidv4());

  const [imagePreviews, setImagePreviews] = useState<string[]>([]); // 미리보기 배열
  const [uploading, setUploading] = useState(false); // 업로드 중 여부 상태

  const [isTourismShow, setIsTourismShow] = useState(false);
  /* 생성이냐 업데이트냐 확인한 후에 form 초기화 */
  const { navigateToCustem } = useNavigation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormBrewery>();

  const onSubmit = async ({
    store,
    summary,
    address,
    detailedAddress,
    sido,
    homepage,
    visit,
    isTourism,
    images,
  }: IFormBrewery) => {
    //1. 이미지 업로드
    console.log(
      "유료화되어서 프리뷰만 진행하고, 이미지 URL은 따로 저장하기로 했음"
    );
    //2. 디비저장

    try {
      setLoading(true);
      const user = await auth.currentUser;
      const reslut = await setDoc(doc(db, "brewery", uuid), {
        userId: user?.uid,
        store,
        summary,
        address,
        detailedAddress,
        sido,
        homepage,
        visit,
        isTourism: String(isTourism) === "true",
        images: [],
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
      });
      alert("완료되었습니다.");
      setLoading(false);
      navigateToCustem("/admin/writing/list/brewery");
    } catch (error) {}

    // 완료후 페이지: http://localhost:5173/admin/writing/list/brewery
  };

  const getUserDocId = async () => {
    const user = auth.currentUser;

    if (!user) {
      console.log("User not logged in");
      return;
    }

    const docRef = doc(db, "user", user.uid);
    const docSnap = await getDoc(docRef);
    return docSnap;

    // const q = query(collection(db, "user"), where("uid", "==", user.uid));

    // const querySnapshot = await getDocs(q);

    // querySnapshot.forEach((doc) => {
    //   console.log("User Doc ID:", doc.id); // 찾은 문서의 ID
    // });
  };

  //이미지 프리뷰
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files) return;

    const fileArray = Array.from(files);
    const validImages: string[] = [];

    // 파일을 base64로 변환하여 미리보기 배열에 추가
    for (let file of fileArray) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          validImages.push(reader.result as string);
          if (validImages.length === fileArray.length) {
            setImagePreviews((prev) => [...prev, ...validImages]);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  //이미지 저장 - Firebase Storage에 이미지 업로드
  const uploadImages = async (files: FileList) => {
    return Array.from(files).map(async (file) => {
      const storageRef = ref(storage, `images/brewery/${uuid}/${file.name}`);

      const result = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(result.ref);
      return url;
    });
  };

  // 이미지 삭제 핸들러
  const handleImageDelete = (imageUrl: string) => {
    setImagePreviews((prev) => prev.filter((preview) => preview !== imageUrl));
  };

  const isTourismShowChange = () => setIsTourismShow((prev) => !prev);

  const changeAddres = ({ sido, address, fullAddress }: IDaumAddress) => {
    setValue("address", fullAddress);
    setValue("sido", sido);
  };
  return (
    <>
      <form className="m-auto max-w-3xl px-2 py-4 flex flex-col gap-3">
        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">상호명</p>
          <div className="w-full md:w-3/4">
            <input
              type="text"
              {...register("store", { required: "필수입력사항입니다." })}
              className="w-full"
            />
            {errors?.store?.message && (
              <p className="text-sm text-red-400">{errors?.store?.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">소개</p>
          <textarea {...register("summary")} className="w-full md:w-3/4" />
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">주소</p>
          <div className="w-full md:w-3/4">
            <div className="flex mb-1">
              <input
                type="text"
                {...register("address")}
                className="mr-1 flex-1"
                readOnly
              />
              <InputAddress changeAddres={changeAddres} />
            </div>
            <input
              type="text"
              {...register("detailedAddress")}
              className="w-full"
              placeholder="상세주소"
            />
            <input type="text" className="hidden" {...register("sido")} />
          </div>
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">홈페이지</p>
          <input
            type="text"
            {...register("homepage")}
            className="w-full md:w-3/4"
          />
        </div>

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="md:w-1/4 md:mb-0">찾아가는양조장</p>
          <div className="flex w-full md:w-3/4 ">
            <label className="input-checkbox">
              찾아가는 양조장입니다.
              <input
                type="checkbox"
                {...register("isTourism", {
                  setValueAs: (value) => value === "true",
                })}
                value="true"
                onChange={isTourismShowChange}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>

        {isTourismShow && (
          <div className="flex flex-col md:items-center md:flex-row">
            <p className="md:w-1/4 md:mb-0">신청방법</p>
            <div className="flex w-full md:w-3/4 ">
              <label className="input-radio mr-4">
                상시방문
                <input type="radio" value="regular" {...register("visit")} />
                <span className="checkmark"></span>
              </label>
              <label className="input-radio">
                예약방문
                <input type="radio" value="reserved" {...register("visit")} />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        )}

        <div className="flex flex-col md:items-center md:flex-row">
          <p className="mb-1 md:w-1/4 md:mb-0">
            이미지({imagePreviews.length})
          </p>
          <div className="flex w-full flex-col md:w-3/4">
            <ul className="flex gap-3 flex-wrap">
              <li className="bg-gray-50 size-16 flex items-center justify-center rounded-md">
                <input
                  type="file"
                  id="fileInput"
                  accept="image/png, image/jpeg"
                  className="hidden"
                  multiple
                  {...register("images")}
                  onChange={handleImageChange}
                />
                <label htmlFor="fileInput">
                  <img src={i_file} alt="이미지 추가" className="size-12" />
                </label>
              </li>

              {imagePreviews.length > 0 &&
                imagePreviews.map((preview, index) => (
                  <li
                    key={index}
                    className="bg-gray-400 size-16 flex items-center justify-center rounded-md"
                  >
                    <div className="size-16 relative">
                      <div className="absolute -right-px -top-px bg-gray-100 p-1 bg-opacity-80 cursor-pointer">
                        <img
                          src={i_close}
                          alt="이미지삭제"
                          className=" size-3 "
                          onClick={() => handleImageDelete(preview)}
                        />
                      </div>
                      <img
                        src={preview}
                        alt=""
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  </li>
                ))}
            </ul>
            <p className="text-sm text-gray-400">최대 10장까지 가능합니다.</p>
          </div>
        </div>
      </form>

      <div className="fixed bg-gray-50 h-12 bottom-0 right-0 left-0 md:left-40 flex items-center justify-end ">
        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="bg-blue-400 border border-blue-400 text-white mr-2 h-auto px-3 py-1"
        >
          저장
        </button>
      </div>
    </>
  );
}
