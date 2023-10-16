import React, { useState } from "react";
import styles from "./Dropdown.module.css";

export default function Dropdown({ options }) {
  const [display, setDisplay] = useState(false);
  const [value, setValue] = useState("Select");

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
        <h2>Selected Option: <u>{value}</u></h2>
      
    </div>
  );
}
