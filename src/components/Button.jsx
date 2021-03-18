import React from "react";
import "../index.css";

function Button({ btnStlye, text }) {
  return (
    <div>
      <button className={btnStlye}>{text}</button>
    </div>
  );
}

export default Button;
