import Header from "@/components/layout/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div className="mt-16 p-4 h-[calc(100%-64px)]">
        <Outlet />
      </div>
    </div>
  );
}
export default App;
