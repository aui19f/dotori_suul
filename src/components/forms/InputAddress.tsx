/*
  다음 주소 api
  https://www.npmjs.com/package/react-daum-postcode
 */
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

import DaumPostcodeEmbed from "react-daum-postcode";
import { useDaumPostcodePopup } from "react-daum-postcode";
export interface IDaumAddress {
  sido: string;
  address: string;
  fullAddress: string;
}
interface ChildComponentProps {
  changeAddres: ({ sido, address, fullAddress }: IDaumAddress) => void;
}

export default function InputAddress({ changeAddres }: ChildComponentProps) {
  let scriptUrl;
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data) => {
    const { sido, address, buildingName, addressType, bname } = data;
    let fullAddress = data.address;
    let extraAddress = "";

    if (addressType === "R") {
      if (bname !== "") {
        extraAddress += bname;
      }
      if (buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${buildingName}` : buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
      changeAddres({ sido, address, fullAddress });
    }
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <button type="button" onClick={handleClick}>
      주소찾기
    </button>
  );
}
