import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const HappyClients = () => {
    const[clients,setClients]=useState([])
    useEffect(()=>{
        fetch('../../../public/happyClients.json')
        .then(res=>res.json())
        .then(result=>setClients(result))
    },[])

    return (
        <Container className='py-5'>
            <h1 className='text-center fw-bolder mb-5'>Our Happy Clients</h1>

            <Row xs={1} md={1} lg={3} className="g-4">

      {clients.map((idx) => (
        <Col key={idx.id}>
          <Card className='d-flex flex-column justify-content-center align-items-center'>
            <Card.Img className='text-center rounded-circle my-2  w-25' variant="top" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
            <Card.Body>
              <Card.Title className='text-center text-secondary fw-bold'>{idx.name}</Card.Title>
              <Card.Text className=''>{idx.testimonial}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </Container>
    );
};

export default HappyClients;