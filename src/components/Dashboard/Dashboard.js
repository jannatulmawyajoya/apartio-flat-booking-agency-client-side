import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AddReview from "../AddReview/AddReview";
import AddService from "../AddService/AddService";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
// import Dashboard from "../Dashboard/Dashboard";
import Review from "../Review/Review";


import "./Dashboard.css";


const Dashbaord = () => {

    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    
    return (
        <div className="dashboard-container">
            <div className="dashboard-container ">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard">
                            <h5>Dashboard</h5>
                            

                            {!admin && <div>
                                <Link to={`${url}/myOrder`}>
                                    <li className="dashboard-menu mt-5">My Order</li>
                                </Link>
                                <Link to={`${url}/pay`}>
                                    <li className="dashboard-menu ">Pay</li>
                                </Link>
                                <Link to={`${url}/addReview`}>
                                    <li className="dashboard-menu ">Add Review</li>
                                </Link>
                            </div>}

                            {admin && <div>
                                <Link to={`${url}/addService`}>
                                    <li className="dashboard-menu ">Add Service</li>
                                </Link>
                                <Link to={`${url}/makeAdmin`}>
                                    <li className="dashboard-menu ">Make Admin</li>
                                </Link>
                                <Link to={`${url}/manageProducts`}>
                                    <li className="dashboard-menu ">Manage Products</li>
                                </Link>
                                <Link to={`${url}/manageOrders`}>
                                    <li className="dashboard-menu ">Manage All Orders</li>
                                </Link>
                            </div>}

                            
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            {/* <Route exact path={path}>
                            <MyOrders></MyOrders>
                                
                            </Route> */}
                            <Route exact path={`${path}/addReview`}>
                                <AddReview></AddReview>
                            </Route>
                            <Route exact path={`${path}/myOrder`}>
                               <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/pay`}>
                               <Pay></Pay>
                            </Route>
                            <Route exact path={`${path}/addService`}>
                              <AddService></AddService>
                            </Route>
                            <Route exact path={`${path}/makeAdmin`}>
                              <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route exact path={`${path}/manageProducts`}>
                              <ManageProducts></ManageProducts>
                            </Route>
                            <Route exact path={`${path}/manageOrders`}>
                             <ManageAllOrders></ManageAllOrders>
                            </Route>
                            
                        </Switch>
                    </div>
                </div>
            </div>
         </div>
    );
};

export default Dashbaord;