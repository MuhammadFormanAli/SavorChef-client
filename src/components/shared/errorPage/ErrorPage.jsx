import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div id="errorImg" style={
            {width:"100%",
        height:"100vh",
        margin:"auto",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
        }}>
      <Container className="my-5">
        <Row>
          <Col className="p-md-5" style={{backgroundColor:"#00000038"}}>
            <h1 style={{fontWeight:"bolder"}} className="text-center text-text-white-50">404</h1>
            <h3 style={{fontWeight:"bolder"}} className="text-center">Some thing Is Wrong</h3>
            <div className="d-flex justify-content-center">
              <Button variant="info"><Link className="text-decoration-none"> Back to Home</Link></Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    );
};

export default ErrorPage;