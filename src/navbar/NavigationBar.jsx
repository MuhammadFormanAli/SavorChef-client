import React, { useState } from 'react';
import  './NavigationBar.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {

    const[user,setUser]=useState(true)

    const click =()=>{
        setUser(!user)
    }

    return (
        
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">SavorChef</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        {
            user?
            <Nav>           
            <img className='user-photo' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
            <Nav.Link eventKey={2} href="#memes"><Button variant="dark" onClick={click}>LogOut</Button></Nav.Link>
          </Nav>
          :<Nav.Link eventKey={2} href="#memes"><Button variant="dark" onClick={click}>LogIn</Button></Nav.Link>
        }
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    );
};

export default NavigationBar;