import React from "react";

const NumberButton = (props) => {
  //console.log('numberbutton props:', props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.number}</button>
    </>
  );
};
