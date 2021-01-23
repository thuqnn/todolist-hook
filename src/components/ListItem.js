import React from "react";
import TaskListItems from "./TaskListItems";
import classes from "./ListItem.module.css";

export default function ListItem({ listName, renderedItems }) {
  return (
    <section className={classes.listTask}>
      <h2>{listName}</h2>
      <ul>
        {renderedItems.map((task, index) => (
          <TaskListItems task={task} key={index} />
        ))}
      </ul>
    </section>
  );
}
