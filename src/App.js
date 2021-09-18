import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Teams from "./Teams";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/teams" component={Teams} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
