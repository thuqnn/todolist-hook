import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import classes from "./CompleteTask.module.css";
import TaskListItems from "./TaskListItems";

//logic add item todo
function CompleteTask({ completeItems, markTaskUncompleted, checked }) {
  const [hide, setHide] = useState(true);
  const onHandleShowHide = () => {
    setHide(!hide);
  };
  return (
    <div className={classes.completed}>
      <section className={classes.listCompleted}>
        <div className={classes.totalComplete}>
          <DownOutlined onClick={onHandleShowHide} />
          <span> Completed </span>
          <span>{completeItems.length}</span>
        </div>
        <ul>
          {completeItems.map((task) => (
            <TaskListItems
              key={task.id}
              task={task}
              markTaskUncompleted={markTaskUncompleted}
              checked={checked}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CompleteTask;
