import React, { useState } from "react";
import Dropdowncart from "./cart/cart-remove/cartdropdown";

const TestComponent = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const MouseOver = () => {
    setDropdownVisible(true);
    console.log("Mouse over triggered");
  };

  const MouseOut = () => {
    setDropdownVisible(false);
    console.log("Mouse out triggered");
  };

  return (
    <div 
      onMouseOver={MouseOver} 
      onMouseOut={MouseOut} 
      style={{ position: 'relative', display: 'inline-block', border: '1px solid black', padding: '10px' }}
    >
      <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Hover over me
      </button>
      {isDropdownVisible && (<Dropdowncart/>)}
    </div>
  );
};

export default TestComponent;
