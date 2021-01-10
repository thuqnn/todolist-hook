import React, { useState } from "react";
import { DownOutlined, StarOutlined } from "@ant-design/icons";
import classes from "./CompleteTask.module.css";

function CompleteTask({ ischecked, taskLists, maskTaskCompleted }) {
  return (
    <div className={classes.completed}>
      <section className={classes.listCompleted}>
        <div className={classes.totalComplete}>
          <DownOutlined />
          <span> Completed</span>
          <span> 157</span>
        </div>
        <ul>
          {taskLists.map((task) => {
            return (
              <li key={task.id}>
                <div className={classes.wrapItem}>
                  <div className={classes.wrap}>
                    <input type="checkbox" />
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
