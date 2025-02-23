import i_arrow_left from "@/assets/images/arrow_left.png";
import i_arrow_right from "@/assets/images/arrow_right.png";
import { useState } from "react";

export default function ImageSlider() {
  const colors = ["red", "yellow", "green", "blue", "gray", "pink"];

  const [currentIndex, setCurrentIndex] = useState(0);

  function previous() {
    setCurrentIndex(currentIndex === 0 ? colors.length - 1 : currentIndex - 1);
  }
  function next() {
    setCurrentIndex(currentIndex === colors.length - 1 ? 0 : currentIndex + 1);
  }
  const move = (n: number) => {
    setCurrentIndex(n);
  };
  return (
    <div className="relative">
      <div
        className="h-96"
        style={{ backgroundColor: `${colors[currentIndex]}` }}
      ></div>

      <ul className="flex items-center justify-center mt-2 mb-4">
        {colors.map((x, index) => (
          <div>
            <div
              className={`w-2 h-2  m-1 ${
                index === currentIndex ? "bg-gray-600" : "bg-gray-200"
              }`}
              onClick={() => move(index)}
            ></div>
          </div>
        ))}
      </ul>

      <div>
        <img
          src={i_arrow_left}
          alt=""
          className="absolute left-1 top-1/3 w-6 h-6"
          onClick={previous}
        />
      </div>
      <div>
        <img
          src={i_arrow_right}
          alt=""
          className="absolute right-1 top-1/3 w-6 h-6"
          onClick={next}
        />
      </div>
    </div>
  );
}
