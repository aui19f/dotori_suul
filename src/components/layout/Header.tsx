import logo from "@/assets/images/logo.png";
export default function Header() {
  return (
    <div className="flex h-16 p-2 bg-gray-100 border-b border-b-gray-200 solid">
      <div className="flex-1">
        <img src={logo} alt="logo" className="h-full" />
      </div>
      <div className="m-auto">
        <button className="border border-gray-300 p-2 text-sm mx-1 rounded-md text-gray-600 hover:bg-gray-200">
          새로운소식
        </button>
        <button className="border border-gray-300 p-2 text-sm mx-1 rounded-md text-gray-600 hover:bg-gray-200">
          로그인
        </button>
      </div>
    </div>
  );
}
