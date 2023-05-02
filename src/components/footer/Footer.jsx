import React from 'react';
import './Footer.css'

import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark py-3">
      <Container>
        
        <Row >
            <Col>
            <h1 className='text-light'>SavorChef</h1>
            </Col>
          <Col className="text-center">
            <ul className="d-flex flex-column">
              <li className="list-inline-item"><a className='text-decoration-none text-light' href="/recipes">Recipes</a></li>
              <li className="list-inline-item"><a className='text-decoration-none text-light' href="/blog">Blog</a></li>
              <li className="list-inline-item"><a className='text-decoration-none text-light' href="/about">About</a></li>
              <li className="list-inline-item"><a className='text-decoration-none text-light' href="/contact">Contact</a></li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="text-center text-md-start">
            <p>Copyright © 2023 
            SavorChef. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p>Designed and developed by 
            YourName</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
