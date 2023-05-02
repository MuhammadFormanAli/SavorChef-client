import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ChefDetails = ({params}) => {

    const imgUrl = "../../../public/22.jpg"
    console.log(useParams())
    return (
        <Container>
            <div className='d-flex flex-column flex-md-row '>
            <Col className='text-center '>
                <div><img className='w-75 h-75 rounded-circle' src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt="" /></div>
                <h1>John Doe</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione soluta culpa, necessitatibus expedita a nemo distinctio,  Quisquam, fugiat!</p>
            </Col>
            <Col className='text-center d-flex flex-column align-items-center justify-content-center' >
                <h2>Experience :10 years</h2>
                <h2>likes:10k</h2>
                <h2>Number of recipes :50</h2>
            </Col>
            </div>
        </Container>
    );
};

export default ChefDetails;