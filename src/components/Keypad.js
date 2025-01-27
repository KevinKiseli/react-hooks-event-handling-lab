// Code Keypad components here

import React from "react";

const Keypad = () => {
  const handleInputChange = () => {
    console.log("Entering password...");
  };

  return (
    <div>
      <label htmlFor="password">Enter Password:</label>
      <input type="password" id="password" onChange={handleInputChange} />
    </div>
  );
};

export default Keypad;
