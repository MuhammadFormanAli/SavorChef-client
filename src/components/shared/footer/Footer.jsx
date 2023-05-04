import React from 'react';
import './Footer.css'
import { FaFacebook,FaTwitter,FaInstagram,FaGoogle } from "react-icons/fa";

import { Row} from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark py-3">
      <div>
        
        <Row >    
            <h1 className='text-light text-center'>SavorChef</h1>
        </Row>

        


          <Row className='text-light text-center'>
            <ul>
              <li className="list-inline-item"><a className='text-decoration-none text-light' href="#/recipes">Recipes</a></li>
              <li className="list-inline-item"><a className='text-decoration-none text-light' href="/blogs">Blog</a></li>
              <li className="list-inline-item"><a className='text-decoration-none text-light' href="#/about">About</a></li>
              <li className="list-inline-item"><a className='text-decoration-none text-light' href="#/contact">Contact</a></li>
            </ul>
          </Row>

          <div className='text-center text-secondary'>
          <span className='fs-5 d-block'>Follow Us on</span>
          <FaFacebook className='follow-us-icon'/>
          <FaTwitter className='follow-us-icon'/>
          <FaInstagram className='follow-us-icon'/>
          <FaGoogle className='follow-us-icon'/>

        </div>
        
        <Row className='text-light text-center'>            <p >Copyright © 2023 
            SavorChef. All Rights Reserved.</p>  
       </Row>
       

            

      </div>
    </footer>
  );
}

export default Footer;
