import classes from "./TaskList.module.css";
import React from "react";

import { StarOutlined } from "@ant-design/icons";

function TaskList({ ischecked, taskLists, onHandleClicked }) {
  return (
    <section className={classes.listTask}>
      <ul>
        {taskLists.map((task) => {
          return (
            <li key={task.id}>
              <div className={classes.wrapItem}>
                <div className={classes.wrap}>
                  <input type="checkbox" onClick={onHandleClicked} />
                  <label>{task.item}</label>
                </div>
                <StarOutlined />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TaskList;
