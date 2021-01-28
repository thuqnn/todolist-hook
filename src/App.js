import React, { useState } from "react";
import Login from "./Login/Login";
import "./App.css";
import Home from "./components/Home";
import { Profile } from "./Profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LISTACCOUNTS } from "./mockup/index";
function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const onLogin = (details) => {
    LISTACCOUNTS.map((item) => {
      if (details.email === item.email && details.password === item.password) {
        setUser({
          name: details.name,
          email: details.email,
        });
      } else {
        setError("Details do not match!");
      }
    });
  };
  const onLogout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <Router>
      <Switch>
        {user.email !== "" ? (
          <div className="welcome">
            <h2>
              Welcome : <span>{user.name}</span>
            </h2>
            <Route path="/todo">
              <Home />
            </Route>
            <button onClick={onLogout}>Logout</button>
          </div>
        ) : (
          <Route path="/">
            <Login onLogin={onLogin} error={error} />
          </Route>
        )}

        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
