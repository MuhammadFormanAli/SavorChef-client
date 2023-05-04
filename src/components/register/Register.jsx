import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Register.css'
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    const{createUser,manageUse}=useContext(AuthContext)

    const [accepted, setAccepted] = useState(false);
    const[error,setError] = useState("")

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length <6){
            setError("Password should be at least 6 character")
            return
          }

        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);


                manageUse(name,photo)
            .then(result=>{
                console.log('Profile Updated')
            })
            .catch(error=>{
                console.log(error.message)
            })


                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })

            


    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }
    return (
        <div>
            <Container className=' border border-1 my-5 col col-12 col-md-6  mx-auto rounded'>
            <h3 className='text-info text-center pt-5'>Please Register</h3>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name="accept"
                        label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
                </Form.Group>

                <Form.Text className='text-danger d-block text-left'>
                    <small>{error}</small>
                </Form.Text>
                

                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                
                <Form.Text className="text-secondary ms-5">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
            </Form>
        </Container>
        </div>
    );
};

export default Register;