import React from "react";

function TextInput({ value, onChange }) {
  return (
    <input
      style={{ outline: "none" }}
      className="border-sky-400/75 border-l-4"
      value={value}
      onChange={onChange}
    ></input>
  );
}

export default TextInput;
