import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllShoutouts from "./routes/AllShoutouts";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <AllShoutouts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
