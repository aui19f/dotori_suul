import Hello from "@/components/Hello";
import Header from "@/components/layout/Header";
import Menu from "@/components/layout/Menu";
import WritingList from "@/components/WritingList";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <div>
        <WritingList />
      </div>
    </div>
  );
}
export default App;
