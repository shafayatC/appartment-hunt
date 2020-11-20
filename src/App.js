import './App.scss';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Single from './Component/Single/Single';
import Login from './Component/Login/Login';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>  
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Login></Login>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
