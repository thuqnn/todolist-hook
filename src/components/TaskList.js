import { StarOutlined } from "@ant-design/icons";
import classes from "./TaskList.module.css";
import React from "react";

function TaskList(props) {
  return (
    <section className={classes.listTask}>
      <ul>
        <li>
          <div className={classes.wrapItem}>
            <div className={classes.wrap}>
              <input type="checkbox" />
              <label>Hoc HTML CSS</label>
            </div>
            <StarOutlined />
          </div>
        </li>
        <li>
          <div className={classes.wrapItem}>
            <div className={classes.wrap}>
              <input type="checkbox" />
              <label>Hoc Javascript</label>
            </div>
            <StarOutlined />
          </div>
        </li>
        <li>
          <div className={classes.wrapItem}>
            <div className={classes.wrap}>
              <input type="checkbox" />
              <label>Hoc Reactjs</label>
            </div>
            <StarOutlined />
          </div>
        </li>
        <li>
          <div className={classes.wrapItem}>
            <div className={classes.wrap}>
              <input type="checkbox" />
              <label>Hoc ES6</label>
            </div>
            <StarOutlined />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default TaskList;
