import classes from "./TaskList.module.css";
import React from "react";

import { StarOutlined } from "@ant-design/icons";

function TaskList({
  incompleteItems,
  maskTaskCompleted,
  onHandleFavorite,
  selected,
}) {
  return (
    <section className={classes.listTask}>
      <ul>
        {incompleteItems.map((task) => {
          return (
            <li key={task.id}>
              <div className={classes.wrapItem}>
                <div className={classes.wrap}>
                  <input
                    name={task.item}
                    type="checkbox"
                    onClick={() => maskTaskCompleted(task.id)}
                  />
                  <label>{task.item}</label>
                </div>
                <StarOutlined
                  onClick={() => onHandleFavorite(task.id)}
                  style={{
                    color: selected.id === task.id ? "red" : null,
                  }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TaskList;
