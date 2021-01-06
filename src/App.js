import "./App.css";
import CompleteTask from "./components/CompleteTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

import "./lib/font-awesome/css/all.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskList />
      <CompleteTask />
    </div>
  );
}

export default App;
