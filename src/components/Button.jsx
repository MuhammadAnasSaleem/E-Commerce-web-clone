import React from "react";

export default function Button(props) {
  return (
    <div>
      <button
        className={`bg-primary text-white text-base ${props.classname}  active:bg-red-600
        `}
      >
        {" "}
        {props.text}
      </button>
    </div>
  );
}
