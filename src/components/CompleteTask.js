import React from "react";
import { DownOutlined, StarOutlined } from "@ant-design/icons";
import classes from "./CompleteTask.module.css";

function CompleteTask({ completeItems, maskTaskUncompleted, checked }) {
  return (
    <div className={classes.completed}>
      <section className={classes.listCompleted}>
        <div className={classes.totalComplete}>
          <DownOutlined />
          <span> Completed </span>
          <span>{completeItems.length}</span>
        </div>
        <ul>
          {completeItems.map((task) => {
            return (
              <li key={task.id}>
                <div className={classes.wrapItem}>
                  <div className={classes.wrap}>
                    <input
                      name={task.item}
                      type="checkbox"
                      defaultChecked={task.isCompleted ? checked : ""}
                      onClick={() => maskTaskUncompleted(task.id)}
                    />
                    <label>{task.item}</label>
                  </div>
                  <StarOutlined />
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default CompleteTask;
