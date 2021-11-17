import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar/Menubar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Menubar></Menubar>
        
         <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/myorder/:email">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path="/manageAllOrders">
            <ManageAllOrder></ManageAllOrder>
          </PrivateRoute>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <PrivateRoute path="/order/:orderId">
            <Order></Order>
          </PrivateRoute>
          <Route path="/services">
            <Offerings></Offerings>
          </Route>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route> */}
        </Switch>
        <Footer></Footer> 
      </Router>
    </div>
  );
}

export default App;
