import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Play } from './components/Play';
import { Score } from './components/Score';
import './scss/main.scss';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/play" component={Play} />
        <Route path="/score" component={Score} />
      </Switch>
    </Router>
  );
}

export default App;
