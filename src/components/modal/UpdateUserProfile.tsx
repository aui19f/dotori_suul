import i_close from "@/assets/images/modal_close.png";
interface IProps {
  title: string;
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function UpdateUserProfile({
  title,
  show,
  onClose,
  children,
}: IProps) {
  if (!show) return null;

  return (
    <div className=" w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 flex items-start md:items-center justify-center ">
      <div className="bg-white shadow-md rounded-md max-w-4xl overflow-hidden w-full md:min-w-[480px] ">
        <div className="relative">
          <div className="flex border-b border-b-gray-400 h-12 px-2 items-center">
            <h2 className="flex-1 text-xl">{title}</h2>
            <div className="size-6 p-1" onClick={onClose}>
              <img className="w-full" src={i_close} alt="닫기" />
            </div>
          </div>

          <div className="p-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
