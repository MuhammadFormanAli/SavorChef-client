import React, { useContext, useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "react-rating";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import './details.css'

const ChefDetails = ({ params }) => {
    const buttons = ["Button 1", "Button 2", "Button 3"];

    const [disable, setDisable] = useState(false);

    const recipes = useLoaderData();
    const { chefs } = useContext(AuthContext);
    const _id = useParams();
    const chef = chefs.find((x) => x.chefId == _id.id);

    const { chefName, imgSrc, bio, experience, likes, totalRecipes } = chef;
    const url =
        "https://images.unsplash.com/photo-1526383426426-c1716158d22a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    console.log(chef, recipes);

    const notify = () =>
        toast("Added to Favorite", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    const handleAddToFavorite = () => {
        notify();
        setDisable(true);
    };

    return (
        <>
            <NavigationBar></NavigationBar>
            <Container>
                <div className="d-flex flex-column flex-md-row details-banner">
                    <Col
                        style={{ background: "#0002038" }}
                        className="text-center text-white"
                    >
                        <div>
                            <Image
                                roundedCircle
                                className="w-50 h-50 my-4"
                                src={imgSrc}
                                alt=""
                            />
                        </div>
                        <div className="px-5  fw-bold">
                            <h1>{chefName}</h1>
                            <p>{bio}</p>
                        </div>
                    </Col>
                    <Col
                        style={{ backgroundColor: "#0000633" }}
                        className="text-center d-flex flex-column align-items-center justify-content-center"
                    >
                        <div className=" text-white text-left rounded p-5">
                            <h2>Experience :{experience}</h2>
                            <h2>
                                <FaHeart className="text-danger"></FaHeart>{" "}
                                {likes}
                            </h2>
                            <h2>Number of recipes :{totalRecipes}</h2>
                        </div>
                    </Col>
                </div>

                <div className="my-5">
                    <h1 className="text-center">Recipes List</h1>
                    {recipes.map((recipe) => (
                        <div key={recipe?.id}>
                            <div>
                                <div className="my-5">
                                    <CardGroup>
                                        <Card className="m">
                                            <Card.Img
                                                variant="top"
                                                src={recipe?.recipeImg}
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    <h1> {recipe.name}</h1>
                                                </Card.Title>

                                                <div>
                                                    <Rating
                                                        className="text-warning"
                                                        readonly
                                                        placeholderRating={
                                                            recipe?.rating
                                                        }
                                                        emptySymbol={
                                                            <FaRegStar />
                                                        }
                                                        placeholderSymbol={
                                                            <FaStar />
                                                        }
                                                        fullSymbol={<FaStar />}
                                                    />
                                                    {recipe?.rating}
                                                </div>
                                            </Card.Body>

                                            <Button
                                                name="a"
                                                key={recipe.id}
                                                onClick={handleAddToFavorite}
                                                className="w-100"
                                                disabled={disable}
                                            >
                                                Add to Favorite
                                            </Button>
                                        </Card>

                                        <Card className="mt-0">
                                            <Card.Body>
                                                <h3>Ingredients</h3>
                                                <Card.Text>
                                                    {recipe.ingredients?.map(
                                                        (x) => (
                                                            <li>{x}</li>
                                                        )
                                                    )}
                                                </Card.Text>
                                                <Card.Title className="text-center">
                                                    Cooking Method
                                                </Card.Title>
                                                <Card.Text>
                                                    {recipe.cooking_method?.map(
                                                        (x) => (
                                                            <li
                                                                style={{
                                                                    type: "circle",
                                                                }}
                                                            >
                                                                {x}
                                                            </li>
                                                        )
                                                    )}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </CardGroup>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
            <Footer></Footer>

            <ToastContainer />
        </>
    );
};

export default ChefDetails;
