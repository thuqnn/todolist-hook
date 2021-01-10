import "./App.css";
import CompleteTask from "./components/CompleteTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

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
