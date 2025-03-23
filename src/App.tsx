import Header from "@/components/layout/Header";
import Loading from "@/components/layout/Loading";

import { Outlet } from "react-router-dom";
import { useLoadingStore } from "@/stores/loadingStore";
import { useLoginStore, initAuthListener } from "@/stores/loginStore";
import { useEffect } from "react";

function App() {
  const { user, isAuthenticated } = useLoginStore();
  const { isLoading } = useLoadingStore();
  useEffect(() => {
    initAuthListener();
  }, []);

  return (
    <>
      {isAuthenticated === null ? (
        <Loading />
      ) : (
        <div className="flex h-screen ">
          {isLoading && <Loading />}
          <Header isLogin={user === null} />
          <div className="flex-1 w-screen h-full pt-14">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
export default App;
