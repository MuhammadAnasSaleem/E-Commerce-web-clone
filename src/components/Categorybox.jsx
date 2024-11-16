import React from "react";

export default function Categorybox(props) {
  return (
    <div className="w-[170px] h-[145px] rounded border-[1px] border-gray-300 flex flex-col justify-center items-center cursor-pointer active:bg-gray-300 transition-all duration-300">
      <div className="flex flex-col justify-center items-center">
        <img src={props.img} alt="" />
        <p>{props.text}</p>
      </div>
    </div>
  );
}
