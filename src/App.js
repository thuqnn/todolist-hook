import React, { useState } from "react";
import _ from "lodash";
import CompleteTask from "./components/CompleteTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [taskLists, setTaskLists] = useState([]);

  const handleAddTodo = (newTaskName) => {
    setTaskLists([
      ...taskLists,
      {
        id: new Date().getTime(),
        createdDate: new Date().getTime(),
        completedDate: null,
        taskName: newTaskName,
        isCompleted: false,
        isFavorite: false,
      },
    ]);
  };

  const handleChangeCompleteStatus = (taskId, newStatus) => {
    setTaskLists(
      taskLists.map((t) =>
        t.id === taskId
          ? {
              ...t,
              isCompleted: newStatus,
              completedDate: new Date().getTime(),
            }
          : t
      )
    );
  };

  const handleChangeFavoriteStatus = (taskId, newStatus) => {
    setTaskLists(
      taskLists.map((t) =>
        t.id === taskId ? { ...t, isFavorite: newStatus } : t
      )
    );
  };

  const [completedList, inCompletedList] = _.partition(
    taskLists,
    (t) => t.isCompleted
  );

  return (
    <div className="App">
      <Header onAddTodo={handleAddTodo} />
      <TaskList
        incompleteItems={inCompletedList}
        onChangeCompleteStatus={handleChangeCompleteStatus}
        onChangeFavoriteStatus={handleChangeFavoriteStatus}
      />
      <CompleteTask
        completedItems={completedList}
        onChangeCompleteStatus={handleChangeCompleteStatus}
        onChangeFavoriteStatus={handleChangeFavoriteStatus}
      />
    </div>
  );
}

export default React.memo(App);
