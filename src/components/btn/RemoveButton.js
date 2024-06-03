import React from 'react';

function Button(props) {
  return (
    <button
    className="bg-white hover:bg-gray-100 text-sky-400 font-semibold py-0 px-2 rounded "
    onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
