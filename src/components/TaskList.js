import classes from "./TaskList.module.css";
import React from "react";
import TaskListItems from "./TaskListItems";

function TaskList({
  incompleteItems,
  markTaskCompleted,
  onHandleFavorite,
  selectedCompleted,
}) {
  return (
    <section className={classes.listTask}>
      <ul>
        {incompleteItems.map((task) => (
          <TaskListItems
            task={task}
            selectedCompleted={selectedCompleted}
            markTaskCompleted={markTaskCompleted}
            onHandleFavorite={onHandleFavorite}
          />
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
