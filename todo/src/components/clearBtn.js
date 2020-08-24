import React from "react";

const ClearBtn = (props) => {
  return (
    <button className="ui inverted red button" onClick={props.cleardone}>
      Clear Done
    </button>
  );
};

export default ClearBtn;
