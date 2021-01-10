import React from "react";
import classes from "./Header.module.css";

function Header({ onHandleChange, onHandeEnter, currentItem }) {
  return (
    <header className={classes.heading}>
      <h1>Tasks</h1>
      <input
        type="text"
        value={currentItem}
        placeholder="Add a task"
        onChange={(e) => onHandleChange(e.target.value)}
        onKeyDown={(event) => onHandeEnter(event)}
      />
    </header>
  );
}

export default Header;
