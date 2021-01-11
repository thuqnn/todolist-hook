import { useState } from "react";

import CompleteTask from "./components/CompleteTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [currentItem, setCurrentItem] = useState(""); //input = ""
  const [taskLists, setTaskLists] = useState([]); //data = []
  const [checked] = useState(true);
  const [selected, setSelected] = useState("");

  const onHandleChange = (value) => {
    setCurrentItem(value);
  };

  const onHandeEnter = (event) => {
    if (event.keyCode === 13) {
      setTaskLists([
        ...taskLists,
        {
          item: currentItem,
          id: new Date().getTime(),
          isCompleted: false,
          isFavorite: false,
        },
      ]);
      setCurrentItem("");
    }
  };

  const maskTaskCompleted = (id) => {
    const tasks = taskLists.find((task) => task.id === id);
    tasks.isCompleted = true;
    setTaskLists((taskLists) => [
      ...taskLists.filter((item) => item.id !== id),
      tasks,
    ]);
  };

  const incompleteItems = taskLists.filter((item) => !item.isCompleted);
  const completeItems = taskLists.filter((item) => item.isCompleted);

  const maskTaskUncompleted = (id) => {
    const tasks = taskLists.find((task) => task.id === id);
    tasks.isCompleted = false;
    setTaskLists((taskLists) => [
      ...taskLists.filter((item) => item.id !== id),
      tasks,
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
    setSelected({ id });
  };

  return (
    <div className="App">
      <Header
        onHandeEnter={onHandeEnter}
        onHandleChange={onHandleChange}
        currentItem={currentItem}
      />
      <TaskList
        maskTaskCompleted={maskTaskCompleted}
        incompleteItems={incompleteItems}
        onHandleFavorite={onHandleFavorite}
        selected={selected}
      />
      <CompleteTask
        completeItems={completeItems}
        checked={checked}
        maskTaskUncompleted={maskTaskUncompleted}
      />
    </div>
  );
}

export default App;
