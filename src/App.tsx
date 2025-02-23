import Hello from "@/components/Hello";
import Header from "@/components/layout/Header";

import WritingList from "@/components/WritingList";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <div className="mt-16 p-4 h-[calc(100%-64px)]">
        <Outlet />
      </div>
      <div>{/* <WritingList /> */}</div>
    </>
  );
}
export default App;
