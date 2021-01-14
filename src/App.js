import React, { useState } from "react";

import CompleteTask from "./components/CompleteTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [taskLists, setTaskLists] = useState([]); //data = []
  const [checked] = useState(true);
  const [selectedCompleted, setSelectedCompleted] = useState("");

  const markTaskCompleted = (id) => {
    const tasks = taskLists.find((task) => task.id === id);
    setTaskLists((taskLists) => [
      { ...tasks, isCompleted: true },
      ...taskLists.filter((item) => item.id !== id),
    ]);
  };

  const incompleteItems = taskLists
    .filter((task) => !task.isCompleted)
    .sort((a, b) => b.id - a.id);

  const completeItems = taskLists
    .filter((task) => task.isCompleted)
    .sort((a, b) => a[0] - b[1]);

  const markTaskUncompleted = (id) => {
    const tasks = taskLists.find((task) => task.id === id);
    setTaskLists((taskLists) => [
      ...taskLists.filter((item) => item.id !== id),
      { ...tasks, isCompleted: false },
    ]);
  };
  const onHandleFavorite = (id) => {
    const checkFavorite = (taskLists.isFavorite = true);

    if (checkFavorite) {
      const findId = taskLists.find((item) => item.id === id);
      setTaskLists((taskLists) => [
        findId,
        ...taskLists.filter((item) => item.id !== id),
      ]);
    }
    setSelectedCompleted({ id });
  };

  return (
    <div className="App">
      <Header setTaskLists={setTaskLists} taskLists={taskLists} />
      <TaskList
        markTaskCompleted={markTaskCompleted}
        incompleteItems={incompleteItems}
        onHandleFavorite={onHandleFavorite}
        selectedCompleted={selectedCompleted}
      />
      <CompleteTask
        completeItems={completeItems}
        checked={checked}
        markTaskUncompleted={markTaskUncompleted}
      />
    </div>
  );
}

export default React.memo(App);
