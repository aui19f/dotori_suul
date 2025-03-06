/*
  다음 주소 api
  https://www.npmjs.com/package/react-daum-postcode
 */
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

import DaumPostcodeEmbed from "react-daum-postcode";
import { useDaumPostcodePopup } from "react-daum-postcode";

export default function InputAddress() {
  let scriptUrl;
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
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
