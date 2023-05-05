import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faHeart } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazy-load";
// import { LazyLoadImage } from 'react-lazy-load-image-component';

const ChefCard = ({ chefs }) => {
   // console.log(chefs)

   return (
      <Container className="my-5">
         <h1 className="my-5 text-center fw-bolder">Our Chefs</h1>
         <Row xs={1} md={2} lg={3} className="g-4">
            {chefs.map((idx) => (
               <Col key={idx.id}>
                  <Card>

                     {/* img load with react-lazy-load */}
                     <LazyLoad>
                        <Card.Img variant="top" src={idx.imgSrc} />
                     </LazyLoad>

                     <Card.Body>
                        <Card.Title className="fw-bold">
                           {idx.chefName}
                        </Card.Title>
                        <Card.Text>
                           {" "}
                           <FontAwesomeIcon
                              className="text-secondary pe-2"
                              icon={faBriefcase}
                           />
                           Experience :{idx.experience}
                        </Card.Text>

                        <div className="d-flex justify-content-between">
                           <div>
                              <FontAwesomeIcon
                                 className="text-danger pe-2"
                                 icon={faHeart}
                              />
                              Likes:{idx.likes}
                           </div>
                           <span>
                              Total recipes:{idx.totalRecipes}
                           </span>
                        </div>

                     </Card.Body>
                     <Link to={`chef-details/${idx.chefId}`}>
                        <Button className="w-100">View Recipes</Button>
                     </Link>
                  </Card>
               </Col>
            ))}
         </Row>
      </Container>
   );
};

export default ChefCard;
