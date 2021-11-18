import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "./Menubar.css";


const Menubar = () => {
    const logo = 'https://i.ibb.co/9hQtY2k/logo222.png';
    const { user, logout } = useAuth();
    return (

        <>

            <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" ><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end mx-3">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        {/* <Nav.Link as={Link} to="/about">About Us</Nav.Link> */}
                        <Nav.Link as={Link} to="/services"> Services</Nav.Link>
                        {/* <Nav.Link as={Link} to="/addService">Add Service</Nav.Link> */}
                       
                        {/* <Nav.Link as={Link} to={`/myorder/${user.email}`}>My Order</Nav.Link> */}
                        {/* <Link to={`/myorder/${user.email}`}>My Order</Link> */}
                        {/* <Nav.Link as={Link} to="/manageAllOrders">Manage All Orders</Nav.Link> */}
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                       
                       
                       {
                           user?.email ? 
                                <Button onClick={logout} variant="primary">LogOut</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                       }
                        








                        {/* if(user?.email){
                            <Nav.Link as={Link} to="/addService">Add Service</Nav.Link> &&
                            <Nav.Link as={Link} to={`/myorder/${user.email}`}>My Order</Nav.Link> &&
                            <Nav.Link as={Link} to="/manageAllOrders">Manage All Orders</Nav.Link>
                        }
                        else{
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        } */}





                        {/* {user?.email ?
                            <Nav.Link as={Link} to="/manageAllOrders">Manage All Orders</Nav.Link> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>

                        } */}

                        {/* {user?.email ?

                            <Button onClick={logOut} variant="primary">LogOut</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>

                        } */}

                        {/* {(user?.email){
                            <Nav.Link as={Link} to="/addService">Add Service</Nav.Link> &&
                            <Nav.Link as={Link} to={`/myorder/${user.email}`}>My Order</Nav.Link> &&
                            <Nav.Link as={Link} to="/manageAllOrders">Manage All Orders</Nav.Link>
                        }
                        {
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }} */}






                        {/* <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>

                </Container>
            </Navbar>


        </>
    );
};

export default Menubar;