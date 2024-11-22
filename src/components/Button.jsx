import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <div>
      <Link to={props.link}>
        <button
          className={`bg-primary text-white text-base ${props.classname}  active:bg-red-600
        `}
        >
          {" "}
          {props.text}
        </button>
      </Link>
    </div>
  );
}
