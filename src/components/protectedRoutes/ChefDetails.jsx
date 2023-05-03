import React, { useContext } from "react";
import {
    Button,
    Card,
    CardGroup,
    Col,
    Container,
    Image,
    Row,
} from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import NavigationBar from "../shared/navbar/NavigationBar";
import Footer from "../shared/footer/Footer";
import { AuthContext } from "../../contexts/AuthProvider";

const ChefDetails = ({ params }) => {
    const recipes = useLoaderData();
    const { chefs } = useContext(AuthContext);
    const _id = useParams();
    const chef = chefs.find((x) => x.chefId == _id.id);

    const { chefName, imgSrc, bio, experience, likes, totalRecipes } = chef;

    console.log(chef, recipes);

    return (
        <>
            <NavigationBar></NavigationBar>
            <Container>
                {/* {
                arr.map(x=><div className='border rounded'><p>life is beautiful</p>
                <div>
                    {
                    x?.f?.map(y=><li>Life is fucking beautiful</li>)
                   }
                </div>
                
                </div>)
            } */}

                <div className="d-flex flex-column flex-md-row ">
                    <Col className="text-center">
                        <div>
                            <Image
                                roundedCircle
                                className="w-75 h-75 my-4"
                                src={imgSrc}
                                alt=""
                            />
                        </div>
                        <h1>{chefName}</h1>
                        <p>{bio}</p>
                    </Col>
                    <Col className="text-center d-flex flex-column align-items-center justify-content-center">
                        <h2>Experience :{experience}</h2>
                        <h2>likes:{likes}</h2>
                        <h2>Number of recipes :{totalRecipes}</h2>
                    </Col>
                </div>




                <div className="my-5">

                    <h1 className="text-center">Recipes List</h1>
                {
                    recipes.map(recipe=> <div><div>
                    
                    <div className="my-5">
                        <CardGroup>
                            <Card className="m">
                                <Card.Img
                                    variant="top"
                                    src="https://st2.depositphotos.com/3889193/7173/i/950/depositphotos_71739083-stock-photo-healthy-vegetarian-home-made-food.jpg"
                                />
                                <Card.Body>
                                    <Card.Title> <h1> {recipe.name}</h1></Card.Title>
                                    
                                    <div>Rating : {recipe.rating}</div>
                                </Card.Body>
                                
                                    <Button className="w-100">Add to Favorite</Button>
                                
                            </Card>

                            <Card className="mt-0">
                                <Card.Body>
                                <Card.Text>
                                        <h3>Ingredients</h3>
                                        {
                                            recipe.ingredients?.map(x=><li>{x}</li>)
                                        }
                                    </Card.Text>
                                    <Card.Title className="text-center">Cooking Method</Card.Title>
                                    <Card.Text>
                                        {recipe.cooking_method?.map(x=><li style={{type:"circle"}}>{x}</li>)}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                </div></div>)
                }
              </div>

                
            </Container>
            <Footer></Footer>
        </>
    );
};

export default ChefDetails;
