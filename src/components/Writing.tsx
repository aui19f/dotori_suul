import WritingBrewery from "@/components/forms/WritingBrewery";
import WritingFestival from "@/components/forms/WritingFestival";
import WritingSuul from "@/components/forms/WritingSuul";
import i_left from "@/assets/images/arrow_left.png";
import {
  Outlet,
  Route,
  useLocation,
  useMatch,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigation } from "@/utils/navigation";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/fbase";
import useBreweryDataStore from "@/stores/brewery";

export default function Writing() {
  const { navigateToCustem } = useNavigation();
  const { pathname } = useLocation();
  const menu = pathname.split("/")[pathname.split("/").length - 1];

  const isList = pathname.includes("/list");
  const isBrewery = pathname.includes("/brewery");

  return (
    <div>
      <div className="flex items-center mb-2 border-b border-gray-100 pb-2 h-12">
        <div
          onClick={() => navigateToCustem("/admin")}
          className="size-6  bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${i_left})` }}
        ></div>
        <h3 className="font-bold text-gray-400">
          {isBrewery && "양조장"}
          {isList ? " 글목록" : " 작성"}
        </h3>
      </div>
      <Outlet menu={menu} />
    </div>
  );
}
