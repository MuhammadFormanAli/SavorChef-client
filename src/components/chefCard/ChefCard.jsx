import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBriefcase, faHeart } from '@fortawesome/free-solid-svg-icons'


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
            {/* <Card.Img variant="top" src={idx.imgSrc} /> */}
            <Card.Img variant="top" src="/chef4.jpg" />
            <Card.Body>
              <Card.Title className='fw-bold'>{idx.chefName}</Card.Title>
              <Card.Text> <FontAwesomeIcon className='text-secondary pe-2' icon={faBriefcase} />Experience{idx.experience}</Card.Text>
              <Card.Text className='d-flex justify-content-between'><h6><FontAwesomeIcon className='text-danger pe-2' icon={faHeart} />Likes:{idx.likes}</h6><span>Total recipes:{idx.totalRecipes}</span></Card.Text>
              
            </Card.Body>
            <Link to={`chef-details/${idx.chefId}`}><Button className='w-100'>View Recipes</Button></Link>
          </Card>
        </Col>
      ))}
    </Row>
        </Container>
    );
};

export default ChefCard;