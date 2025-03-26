import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";

// 항목을 나타내는 상수
const ITEM_TYPE = "ITEM";

// List 항목 컴포넌트
export default function DraggableItem({
  index,
  text,
  moveItem,
  children,
}: {
  index: number;
  text: string;
  moveItem: any;
  children: React.ReactNode;
}) {
  const [, drag] = useDrag({
    type: ITEM_TYPE,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover: (item) => {
      if (item.index !== index) {
        moveItem(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <li ref={(node) => drag(drop(node))}>
      {/* <input type="text" value={text} /> */}
      {children}
    </li>
  );
}
