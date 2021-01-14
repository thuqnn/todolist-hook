import React, { useState } from "react";
import classes from "./Header.module.css";

function Header({ setTaskLists, taskLists }) {
  const [currentItem, setCurrentItem] = useState(""); //input = ""
  const onHandleChange = (value) => {
    setCurrentItem(value);
  };

  const onHandeEnter = (event) => {
    if (event.keyCode === 13) {
      setTaskLists([
        {
          item: currentItem,
          id: new Date().getTime(),
          isCompleted: false,
          isFavorite: false,
        },
        ...taskLists,
      ]);
      setCurrentItem("");
    }
  };
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
