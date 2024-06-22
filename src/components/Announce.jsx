import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function Announce() {
  const [announsStyle, setAnnounsStyle] = useState(
    ""
  );

  const handelClose = () => {
    setAnnounsStyle(" hidden absolute");
  };

  return (
    <div className={announsStyle + "bg-[#8a4af3] text-white flex items-center justify-center font-medium py-2 text-xl gap-1"}>
      <h2>Huury up it’s 44% off now</h2>
      <FontAwesomeIcon
        icon={faXmark}
        className="cursor-pointer size-6"
        onClick={handelClose}
      />
    </div>
  );
}

export default Announce;
