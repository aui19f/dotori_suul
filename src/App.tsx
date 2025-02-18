import Hello from "@/components/Hello";
import Header from "@/components/layout/Header";
import Menu from "@/components/layout/Menu";
import WritingList from "@/components/WritingList";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <div>
        <Outlet />
      </div>
      <div>{/* <WritingList /> */}</div>
    </div>
  );
}
export default App;
