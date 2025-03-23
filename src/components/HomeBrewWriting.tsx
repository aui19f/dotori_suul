import { IHomeBreweryForm } from "@/interfaces/HomeBrewery";
import { useForm } from "react-hook-form";
import { useDrag } from "react-dnd";
import { useState } from "react";
import DraggableItem from "@/components/DraggableItem";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export default function HomeBrewWriting() {
  const { register } = useForm<IHomeBreweryForm>();
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ]);
  // 항목 순서를 변경하는 함수
  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };
  return (
    <article className="my-4 max-w-[750px] m-auto">
      <header className="bg-gray-50 p-2 mb-2">
        <img src="" alt="" />
        <h2 className="text-2xl">글작성</h2>
      </header>
      <section className="">
        <form>
          {/* <fieldset>
            <legend>글작성</legend>
          </fieldset> */}

          <div className="flex items-center w-full px-4 py-2">
            <label className="hidden md:block flex-1 ">제목</label>
            <input
              type="text"
              {...register("title", { required: "필수입력사항입니다." })}
              className="flex-[3]"
              placeholder="제목을 입력하세요."
            />
          </div>

          <div className="flex items-center w-full px-4 py-2">
            <label className="hidden md:block flex-1">재료</label>
            <ul className="flex-[3]">
              <li className="flex items-center">
                <input type="text" className="flex-1 mr-2" />
                <input type="number" className="mr-2" />
                <select>
                  <option value="ml">ml</option>
                  <option value="g">g</option>
                </select>
              </li>
            </ul>
          </div>

          <div className="flex w-full px-4 py-2">
            <label className="mt-1 hidden md:block flex-1">만드는 법</label>
            <DndProvider backend={HTML5Backend}>
              <ul className="flex-[3] [&_li]:mb-1 [&_li]:flex [&_li]:items-center [&_input]:w-full [&_input]:mr-1">
                {items.map((item, index) => (
                  <DraggableItem
                    key={item.id}
                    index={index}
                    text={item.text}
                    moveItem={moveItem}
                  ></DraggableItem>
                ))}
                {/* {items.map((item, index) => (
                  <DraggableIte
                   
                  />
                ))} */}
              </ul>
            </DndProvider>
          </div>
        </form>
      </section>
    </article>
  );
}
