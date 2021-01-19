import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Registration from '../pages/Registration/Registration';
import Login from '../pages/Login/Login';
import NotFound from '../pages/404/404';
import TutorUpdateProfile from '../pages/TutorUpdateProfile/TutorUpdateProfile';
import StudentUpdateProfile from '../pages/StudentUpdateProfile/StudentUpdateProfile';
import Dashboard from '../pages/Dashboard/Dashboard';
import Navbar from '../components/Navbar/Navbar';
import Alert from '../components/Alert/Alert';

const Routes = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Alert />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register/student">
            <Registration />
          </Route>
          <Route exact path="/register/tutor">
            <Registration />
          </Route>

          <Route exact path="/login/student">
            <Login />
          </Route>
          <Route exact path="/login/tutor">
            <Login />
          </Route>
          <Route exact path="/login/admin">
            <Login />
          </Route>
          <Route exact path="/update-profile/tutor">
            <TutorUpdateProfile />
          </Route>
          <Route exact path="/update-profile/student">
            <StudentUpdateProfile />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Routes;
