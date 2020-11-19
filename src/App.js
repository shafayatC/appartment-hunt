import './App.scss';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>  
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
