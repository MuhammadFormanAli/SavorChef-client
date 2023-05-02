
// import React, { useState } from 'react';
import { useContext } from 'react';
import './Login.css'
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {




    const { signIn } = useContext(AuthContext);
  
    const handleLogin = (event) => {
      event.preventDefault();

      const form = event.target 
      const email = form.email.value 
      const password = form.password.value 

      console.log(email, password)

      signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })

      // Perform login logic here
    }


    return (
        <div>
          <Container className=' border border-1 mt-5 col col-12 col-md-6  mx-auto rounded' >
            <h3 className='text-center text-info py-3'>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                
            </Form>
        </Container>











          
            
        </div>
    );
};

export default Login;