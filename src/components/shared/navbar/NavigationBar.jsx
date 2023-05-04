import React, { useContext, useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import ActiveLink from "../../ActiveLink/ActiveLink";

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
   
    // console.log(user)


    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                    {" "}
                    <div>
                    <Link className="fs-1 text-decoration-none" to="/">
                        SavorChef
                    </Link>

                    <i className="d-block">Chinese cuisine</i>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className=" text-center m-auto">
                        <ActiveLink className="nav-link" to="/">
                            Home
                        </ActiveLink>
                        <ActiveLink className="nav-link" to="/blogs">
                            Blog
                        </ActiveLink>

                        {!user ? (
                            <ActiveLink className="nav-link" to="/register">
                                Register
                            </ActiveLink>
                        ) : (
                            ""
                        )}
                    </Nav>
                    <div className="text-center">
                        {user ? (
                            <Nav>
                                <Image data-toggle="tooltip" data-placement="top" title={user?.displayName} style={{width:"40px"}} roundedCircle className="user-photo"
                                    src={user?.photoURL}
                                    alt=""></Image>
                                
                                <Nav.Link eventKey={2} href="#memes">
                                    <Button variant="dark" onClick={logOut}>
                                        LogOut
                                    </Button>
                                </Nav.Link>
                            </Nav>
                        ) : (
                            <Button variant="dark">
                                <Link
                                    className="text-white text-decoration-none"
                                    to="/login"
                                >
                                    login
                                </Link>
                            </Button>
                        )}
                    </div>
                </Navbar.Collapse>
                

                
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
