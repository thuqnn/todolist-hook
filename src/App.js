import { useState } from "react";

import CompleteTask from "./components/CompleteTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [currentItem, setCurrentItem] = useState(""); //input = ""
  const [taskLists, setTaskLists] = useState([]); //data = []
  const [checked] = useState(true);
  const onHandleChange = (value) => {
    setCurrentItem(value);
  };
  const onHandeEnter = (event) => {
    if (event.keyCode === 13) {
      setTaskLists([
        ...taskLists,
        { item: currentItem, id: new Date().getTime(), isCompleted: false },
      ]); //[{}] mot mang object
      setCurrentItem("");
    }
  };

  const maskTaskCompleted = (id) => {
    const tasks = taskLists.find((task) => task.id === id);
    tasks.isCompleted = true;
    setTaskLists((taskLists) => [
      ...taskLists.filter((x) => x.id !== id),
      tasks,
    ]);
  };
  const incompleteItems = taskLists.filter((x) => !x.isCompleted);
  const completeItems = taskLists.filter((x) => x.isCompleted);
  const maskTasUncompleted = (id) => {
    const tasks = taskLists.find((task) => task.id === id);
    tasks.isCompleted = false;
    setTaskLists((taskLists) => [
      ...taskLists.filter((x) => x.id !== id),
      tasks,
    ]);
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
      />
      <CompleteTask
        completeItems={completeItems}
        checked={checked}
        maskTasUncompleted={maskTasUncompleted}
      />
    </div>
  );
}

export default App;
