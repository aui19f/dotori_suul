import { auth } from "@/fbase";
import { User } from "@firebase/auth";

import { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [initLoading, setInitLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user !== null) {
        setUser(user);
      } else {
        setUser(null);
      }

      setInitLoading(false);
    });
    return () => unsubscribe(); // 언마운트 시 구독 취소
  }, []);

  return { user, initLoading };
};
export default useAuth;
