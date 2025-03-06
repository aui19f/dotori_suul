import Header from "@/components/layout/Header";
import Loading from "@/components/layout/Loading";
import { useAuth } from "@/custom/UseAuth";
import { Outlet } from "react-router-dom";
import { useLoadingStore } from "@/stores/loadingStore";

function App() {
  const { user, initLoading } = useAuth();
  const isLoading = useLoadingStore((state) => state.isLoading);

  return (
    <>
      {initLoading ? (
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
