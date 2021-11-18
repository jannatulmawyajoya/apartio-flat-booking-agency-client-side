import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar/Menubar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AddService from './components/AddService/AddService';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Purchase from './components/Purchase/Purchase';
import MyOrders from './components/MyOrders/MyOrders';
import Pay from './components/Pay/Pay';
import AddReview from './components/AddReview/AddReview';
import Review from './components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
     <AuthProvider>
        <Router>
          <Menubar></Menubar>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/addReview">
              <AddReview></AddReview>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/pay">
              <Pay></Pay>
            </Route>
            <Route path="/reviews">
              <Review></Review>
            </Route>
            <PrivateRoute exact path="/purchase/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route exact path="/myOrder">
              <MyOrders></MyOrders>
            </Route>
            {/* 
          <Route path="*">
            <NotFound></NotFound>
          </Route> */}
          </Switch>
          <Footer></Footer>
        </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
