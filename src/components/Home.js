import React from "react";
import _ from "lodash";
import CompleteTask from "../components/CompleteTask";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";

function Home({ taskLists }) {
  const [completedList, inCompletedList] = _.partition(
    taskLists,
    (t) => t.isCompleted
  );

  return (
    <div
      className="App"
      style={{ backgroundColor: "rgba(14, 205, 253, 0.884)" }}
    >
      <Header />
      <TaskList incompleteItems={inCompletedList} />
      <CompleteTask completedItems={completedList} />
    </div>
  );
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    taskLists: state.addTodos.taskLists,
  };
};
export default connect(mapStateToProps)(Home);
