import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefCard = ({chefs}) => {

    console.log(chefs)


    const array = [1,2,3,4,5,6]
    return (
        <Container className='my-5'>
            <h2 className='my-5 text-center'>Our Chefs</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
      {chefs.map((idx) => (
        <Col key={idx.id}>
          <Card>
            <Card.Img variant="top" src={idx.imgSrc} />
            <Card.Body>
              <Card.Title>{idx.chefName}</Card.Title>
              <Card.Text>{idx.experience} of Experience</Card.Text>
              <Card.Text className='d-flex justify-content-between'><span>Likes:{idx.likes}</span><span>Total recipes:{idx.recipes}</span></Card.Text>
              
            </Card.Body>
            <Link to={`chef-details/${idx.id}`}><Button className='w-100'>View Recipes</Button></Link>
          </Card>
        </Col>
      ))}
    </Row>
        </Container>
    );
};

export default ChefCard;