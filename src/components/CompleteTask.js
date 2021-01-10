import React from "react";
import { DownOutlined, StarOutlined } from "@ant-design/icons";
import classes from "./CompleteTask.module.css";

function CompleteTask(props) {
  return (
    <div className={classes.completed}>
      <section className={classes.listCompleted}>
        <div className={classes.totalComplete}>
          <DownOutlined />
          <span> Completed</span>
          <span> 157</span>
        </div>
        <ul>
          <li>
            <div className={classes.wrapItem}>
              <div className={classes.wrap}>
                <input type="checkbox" />
                <label>Hoc Java</label>
              </div>
              <StarOutlined />
            </div>
          </li>
          <li>
            <div className={classes.wrapItem}>
              <div className={classes.wrap}>
                <input type="checkbox" />
                <label>Hoc UI UX</label>
              </div>
              <StarOutlined />
            </div>
          </li>
          <li>
            <div className={classes.wrapItem}>
              <div className={classes.wrap}>
                <input type="checkbox" />
                <label>Hoc English</label>
              </div>
              <StarOutlined />
            </div>
          </li>
          <li>
            <div className={classes.wrapItem}>
              <div className={classes.wrap}>
                <input type="checkbox" />
                <label>Hoc Writing</label>
              </div>
              <StarOutlined />
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default CompleteTask;
