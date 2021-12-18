import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home';
import Details from './Component/Details';
import Allcar from './Component/Allcar';
import Navigation from './Component/Navigation';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
import AuthProvider from './Component/Login/AuthProvider';
import PrivateRoute from './Component/Login/PrivateRoute';
import SingleUser from './Component/SingleUser';
import AddCar from './Component/AddCar';
import YourProfile from './Component/YourProfile';
import RevewPepole from './Component/RevewPepole';
import Shop from './Component/Commarce/Shop';
import OrderRevew from './Component/Commarce/OrderRevew';
import PlaceOrder from './Component/Commarce/PlaceOrder';
// import Update from './Component/Update';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/revew">
              <RevewPepole />
            </Route>
            {/* <Route path="/dashbord">
              <Dashbord />
            </Route> */}
            <Route path="/addCar">
              <AddCar />
            </Route>
            {/* <Route path="/updateuser/:id">
              <Update />
            </Route> */}
            <Route path="/profile">
              <YourProfile />
            </Route>
            <Route path="/allcar">
              <Allcar />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/placeorder">
              <PlaceOrder />
            </Route>
            <Route path="/orderrevew">
              <OrderRevew />
            </Route>
            <Route path="/single">
              <SingleUser />
            </Route>
            <PrivateRoute path="/details/:id">
              <Details />
            </PrivateRoute>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
