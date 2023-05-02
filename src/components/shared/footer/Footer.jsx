import React from 'react';
import './Footer.css'

import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark py-3">
      <Container>
        
        <Row >    
            <h1 className='text-light text-center'>SavorChef</h1>
        </Row>
          <Row className='text-light text-center'>
            <ul>
              <li className="list-inline-item"><a className='text-decoration-none text-light' href="/recipes">Recipes</a></li>
              <li className="list-inline-item"><a className='text-decoration-none text-light' href="/blog">Blog</a></li>
              <li className="list-inline-item"><a className='text-decoration-none text-light' href="/about">About</a></li>
              <li className="list-inline-item"><a className='text-decoration-none text-light' href="/contact">Contact</a></li>
            </ul>
          </Row>
        
        <Row className='text-light text-center'>            <p >Copyright © 2023 
            SavorChef. All Rights Reserved.</p>  
       </Row>
       

            

      </Container>
    </footer>
  );
}

export default Footer;
