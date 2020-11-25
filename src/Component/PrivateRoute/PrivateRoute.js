import React, { useContext } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

const PrivateRoute=({user, children, ...rest})=> {

  

    return (
      <Route
        {...rest}
        render={({ location }) =>
            user.length ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
    
  }

  const mapStateToProps = state => {
    return{
      user: state.user
    }
  }
  const mapDispatchToProps = {

  }
export default  connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);