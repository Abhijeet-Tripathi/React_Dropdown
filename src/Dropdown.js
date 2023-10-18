import React, { useState } from "react";
import styles from "./Dropdown.module.css";
//Below Component is receiving the option as prop.
export default function Dropdown({ options }) {
  const [display, setDisplay] = useState(false);//This State helps in conditional rendering of the Options Array
  const [value, setValue] = useState("Select");//This state stores Value of the Dropdown box,Initially set to Select.

  //Below function on Clicking the Options Set the value of the dropbox to that  of the option selected.
  function handleSelection(e) {
    e.preventDefault();
    setValue(e.target.value);
    setDisplay(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <select
          name="dropmenu"
          value={value}
          onChange={handleSelection}
          onMouseOver={() => {setDisplay(true);}}
          required
        >
          <option value={value}>{value}</option>
        </select>
        {/* Conditional Rendering->Which becomes true when mouseOver Event is Active over the dropbox */}
        {display &&
          options.map((item,index) => (
            <option key={index}
              onClick={(e) => {
                e.preventDefault();
                setValue(item);
                setDisplay(false);
                setValue(item);
              }}
            >
              {item}
            </option>
          ))}

      </div>
      {/* Here we are simply showing the Value Selected */}
        <h2>Selected Option: <u>{value}</u></h2>
      
    </div>
  );
}
