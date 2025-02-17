import suul from "@/assets/images/menu_suul.png";
import festival from "@/assets/images/menu_festival.png";
import introduction from "@/assets/images/menu_introduction.png";
import brewery from "@/assets/images/menu_brewery.png";
import homebrew from "@/assets/images/menu_homebrew.png";

export default function Menu() {
  return (
    <nav>
      <ul className="flex my-6">
        <li className="flex items-center opacity-1 border-b-2 border-b-gray-400 mx-2 py-2">
          <img className="size-6 mr-1" src={homebrew} alt="가양주" />
          <p className="text-gray-4">가양주</p>
        </li>
        <li className="flex items-center opacity-60 py-2 mx-2 hover:opacity-80">
          <img className="size-6 mr-1" src={brewery} alt="양조장" />
          <p className="text-gray-4">양조장</p>
        </li>
        <li className="flex items-center opacity-60 py-2 mx-2 hover:opacity-80">
          <img className="size-6 mr-1" src={suul} alt="우리술" />
          <p className="text-gray-4">우리술</p>
        </li>
        <li className="flex items-center opacity-60 py-2 mx-2 hover:opacity-80">
          <img className="size-6 mr-1" src={festival} alt="대축제" />
          <p className="text-gray-4">대축제</p>
        </li>
        <li className="flex items-center opacity-60 py-2 mx-2 hover:opacity-80">
          <img className="size-6 mr-1" src={introduction} alt="소개" />
          <p className="text-gray-4">소개</p>
        </li>
      </ul>
    </nav>
    // Homebrew
    // brewery
    //
    //
    //
  );
}
