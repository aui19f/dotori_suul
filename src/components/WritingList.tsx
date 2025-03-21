import { db } from "@/fbase";
import useBreweryDataStore from "@/stores/brewery";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function WritingList(menu: string) {
  const { data, isLoading, error, fetchData } = useBreweryDataStore();
  useEffect(() => {
    fetchData("brewery");
  }, [menu]);

  return (
    <>
      <ul>
        {data.map((x) => (
          <li className="flex items-start flex-col md:flex-row md:items-center shadow-md mb-3 p-2 rounded-md bg-gray-50">
            <div className="flex-1 flex flex-col mb-2 md:mb-0">
              <p className="mb-1">{x.store}</p>
              <div className="flex flex-row items-center text-sm text-gray-400">
                <p className="mr-1 border rounded-md px-1">조회수 N</p>
                <p className="mr-1 border rounded-md px-1">좋아요 N</p>
                <p className="mr-1 border rounded-md px-1">북마크 N</p>
                <p className="mr-1 border rounded-md px-1">리뷰 N</p>
                <p className="mr-1 border rounded-md px-1">댓글 N</p>
              </div>
            </div>

            <div className="text-right w-full md:w-auto">
              <button className="text-sm border-0 bg-gray-400 text-white h-auto p-1 mr-1">
                수정
              </button>
              <button className="text-sm border-0 bg-gray-400 text-white h-auto p-1">
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
