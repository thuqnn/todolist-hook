import React from "react";
import { StarOutlined } from "@ant-design/icons";
import classes from "./TaskListItems.module.css";

function TaskListItems({
  task,
  markTaskCompleted,
  markTaskUncompleted,
  onHandleFavorite,
  checked,
  selectedCompleted,
  hide,
}) {
  console.log(markTaskUncompleted);
  return (
    <>
      <li key={task.id}>
        <div className={classes.wrapItem}>
          <div className={classes.wrap}>
            <input
              name={task.item}
              type="checkbox"
              onClick={
                task.isCompleted
                  ? () => markTaskUncompleted(task.id)
                  : () => markTaskCompleted(task.id)
              }
            />
            <label>{task.item}</label>
          </div>
          <StarOutlined
            onClick={() => onHandleFavorite(task.id)}
            // style={{
            //   color: selectedCompleted.id === task.id ? "red" : null,
            // }}
          />
        </div>
      </li>
    </>
  );
}
export default TaskListItems;
