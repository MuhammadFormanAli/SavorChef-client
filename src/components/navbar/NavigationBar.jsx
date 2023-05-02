import React, { useContext, useState } from 'react';
import  './NavigationBar.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const NavigationBar = () => {

    const{user,logOut}=useContext(AuthContext)

    // const[loggedUser,setLoggedUser]=useState(true)

    // const click =()=>{
    //     setUser(!user)
    // }

    return (
        
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">SavorChef</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/protected">Protected</Link></Nav.Link>
            <Nav.Link><Link to="/price">Price</Link></Nav.Link>
          </Nav>
        {
            user?
            <Nav>           
            <img className='user-photo' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
            <Nav.Link eventKey={2} href="#memes"><Button variant="dark" onClick={logOut} >LogOut</Button></Nav.Link>
          </Nav>
          :<Nav.Link><Button variant="dark" ><Link className='text-white text-decoration-none' to="/login">login</Link></Button></Nav.Link>
        }
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    );
};

export default NavigationBar;