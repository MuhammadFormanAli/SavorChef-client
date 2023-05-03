
// import React, { useState } from 'react';
import { useContext, useState } from 'react';
import './Login.css'
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {


    const[error,setError] = useState("")

    const { signIn,googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'
    
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
                setError(error.message);
            })

    }

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result =>{
            // const user = result.user
            // console.log(user)
            navigate(from, { replace: true })
        })
        .catch(err=>{
            console.log(err.message)
            setError(err.message)
        })
    }


    return (
        <div>
          <Container className=' border border-1 my-5 col col-12 col-md-6  mx-auto rounded' >
            <h3 className='text-center text-info py-3'>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
                <br />
                    <h1 className='text-center'>Or</h1>
                <div className='w-100 d-flex flex-column py-3 '>
                    <Button onClick={handleGoogleSignIn} className='mb-3' variant="outline-primary">Login with Google</Button>
                    
                    <Button variant="outline-secondary">Login with GitHub</Button>
                </div>

                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>

                <Form.Text className='text-danger d-block text-center'>
                    <small>{error}</small>
                </Form.Text>
                
            </Form>
        </Container>











          
            
        </div>
    );
};

export default Login;