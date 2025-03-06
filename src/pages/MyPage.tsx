import { useNavigation } from "@/utils/navigation";
import { useState } from "react";

export default function MyPage() {
  const [iaAdmin, setIsAdmin] = useState(true);
  const { navigateToCustem } = useNavigation();
  return (
    <div>
      <div>내정보</div>
      <div>내가올린글보기</div>
      {iaAdmin ? (
        <div>
          <button onClick={() => navigateToCustem("/admin")}>
            관리자페이지
          </button>
        </div>
      ) : null}
    </div>
  );
}
