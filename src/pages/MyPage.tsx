import { initAuthListener, useLoginStore } from "@/stores/loginStore";
import { useNavigation } from "@/utils/navigation";
import { useEffect, useState } from "react";

export default function MyPage() {
  const [iaAdmin, setIsAdmin] = useState(true);
  const { navigateToCustem, navigateToLogin } = useNavigation();
  const { isAuthenticated } = useLoginStore();
  const {} = useNavigation;
  useEffect(() => {
    initAuthListener();
  }, []);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigateToLogin("/mypage");
    }
  }, [isAuthenticated]); // user 상태가 변경될 때마다 실행

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
