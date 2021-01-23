import React from "react";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import classes from "./TaskListItems.module.css";
import { connect } from "react-redux";
import { onChangeCompletedTodo, onChangeFavoriteTodo } from "../actionCreator";

function TaskListItems({ onChangeCompletedTodo, onChangeFavoriteTodo, task }) {
  return (
    <li key={task.id}>
      <div className={classes.wrapItem}>
        <div className={classes.wrap}>
          <input
            defaultChecked={task.isCompleted}
            type="checkbox"
            onClick={() => onChangeCompletedTodo(task.id, !task.isCompleted)}
          />
          <label>{task.taskName}</label>
        </div>
        {task.isCompleted ? (
          <span></span>
        ) : task.isFavorite ? (
          <StarFilled
            onClick={() => onChangeFavoriteTodo(task.id, !task.isFavorite)}
            style={{
              color: "blue",
            }}
          />
        ) : (
          <StarOutlined
            onClick={() => onChangeFavoriteTodo(task.id, !task.isFavorite)}
          />
        )}
      </div>
    </li>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    taskLists: state.addTodos.taskLists,
  };
};
const mapDispatchToProps = { onChangeCompletedTodo, onChangeFavoriteTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TaskListItems);
