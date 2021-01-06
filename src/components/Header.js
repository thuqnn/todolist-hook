import React from "react";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <header className={classes.heading}>
      <h1>Tasks</h1>
      <input type="text" defaultValue={""} placeholder="Add a task" />
    </header>
  );
}

export default Header;
