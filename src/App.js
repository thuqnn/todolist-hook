import { useState } from "react";

import CompleteTask from "./components/CompleteTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [currentItem, setCurrentItem] = useState(""); //input = ""
  const [taskLists, setTaskLists] = useState([]); //data = []
  const [ischecked, setIsChecked] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  console.log(taskLists);
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

  const onHandleClicked = () => {
    setIsChecked(!ischecked);
    //when click true (not click is false)
    maskTaskCompleted();
  };

  const maskTaskCompleted = () => {
    if (!ischecked) {
      setIsCompleted([...taskLists]);
    } else {
      return console.log(!ischecked);
    }
  };
  return (
    <div className="App">
      <Header
        onHandeEnter={onHandeEnter}
        onHandleChange={onHandleChange}
        currentItem={currentItem}
      />
      <TaskList
        taskLists={taskLists}
        onHandleClicked={onHandleClicked}
        ischecked={ischecked}
      />
      <CompleteTask
        ischecked={ischecked}
        taskLists={taskLists}
        maskTaskCompleted={maskTaskCompleted}
      />
    </div>
  );
}

export default App;
