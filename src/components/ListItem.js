import React from "react";
import TaskListItems from "./TaskListItems";
import classes from "./ListItem.module.css";

export default function ListItem({ listName, renderedItems }) {
  return (
    <section className={classes.listTask}>
      <h2>{listName}</h2>
      <ul>
        {renderedItems.map((task) => (
          <TaskListItems task={task} key={task.id} />
        ))}
      </ul>
    </section>
  );
}
