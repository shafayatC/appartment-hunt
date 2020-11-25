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
import Dashboard from './Component/Dashboard/Dashboard';
import BookingList from './Component/Dashboard/BookingList';
import EventCreate from './Component/Dashboard/EventCreate';
import AddRentHouse from './Component/Dashboard/AddRentHouse';
import Myrent from './Component/Dashboard/Myrent';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>  
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route  path="/post/:id">
             <Single/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <PrivateRoute  path="/booking-list">
              <Dashboard name="Booking List" component={<BookingList/>} ></Dashboard>
            </PrivateRoute>
            <PrivateRoute  path="/event-create">
              <Dashboard name="Event Create" component={<AddRentHouse/>} ></Dashboard>
            </PrivateRoute>
            <PrivateRoute  path="/rent-list">
             <Dashboard name="My Rent List" component={<Myrent/>} ></Dashboard>
            </PrivateRoute>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
