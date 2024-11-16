import React from "react";

export default function Redbox(props) {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-5 h-10 bg-primary rounded-sm"></div>
      <p className="text-primary font-semibold">{props.text}</p>
    </div>
  );
}
