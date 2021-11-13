import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import LogIn from './Pages/LogIn/LogIn';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './routes/PrivateRoute';
// import MyOrders from './Pages/MyOrders/MyOrders';
import UpdateStatus from './Pages/UpdateStatus/UpdateStatus';
// import AddReview from './Pages/AddReview/AddReview';
import Explore from './Pages/Explore/Explore';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
// import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/explore">
              <Explore></Explore>
            </Route>
            <Route exact path="/login">
              <LogIn />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/placeorder/:id">
              <PlaceOrder />
            </PrivateRoute>
            <Route exact path="/update/:id">
              <UpdateStatus />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
