import React from "react";

function Button(props) {
  return (
    <button
      className="btn"
      id={props.id}
      onMouseOver={props.onMouseOver}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
export default Button;
