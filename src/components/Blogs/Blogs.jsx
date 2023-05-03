import React from "react";
import "./Blogs.css";
import NavigationBar from "../shared/navbar/NavigationBar";
import Footer from "../shared/footer/Footer";
import { Container } from "react-bootstrap";

const Blogs = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container>
                <div className="blog-heading-container">
                    <h1 className="blog-heading">Blogs</h1>
                </div>
                <div>
                    <div className="qna-container">
                        {/* first question and answer */}
                        <div className="qna">
                            <h3 className="question">
                                Tell us the differences between uncontrolled and
                                controlled components?
                            </h3>
                            <p className="ans">
                                In React, controlled components refer to
                                components that have their state and behavior
                                controlled by the parent component. These
                                components rely on props passed down from the
                                parent component to update their state and
                                behavior.
                                <br />
                                <br />
                                Uncontrolled components refer to components that
                                manage their own state internally. They use a
                                ref to access the DOM element's current value
                                and update the state accordingly.
                            </p>
                        </div>

                        {/* second answer */}
                        <div className="qna">
                            <h3 className="question">
                                How to validate React props using PropTypes?
                            </h3>
                            <p className="ans">
                                Install PropTypes: PropTypes is a separate
                                package that you need to install. You can
                                install it using npm or yarn. <br />
                                <br />
                                Import PropTypes: Once you have installed
                                PropTypes, you need to import it in your React
                                component file.
                                <br />
                                Define propTypes: After importing PropTypes, you
                                can define propTypes for your component. You can
                                do this by creating a static propTypes object
                                inside your component class.
                                <br />
                                se propTypes: Once you have defined propTypes
                                for your component, React will automatically
                                validate the props whenever the component is
                                rendered. If a prop is not of the expected type,
                                React will show a warning in the console.
                                <br />
                                Using PropTypes can help catch bugs early on in
                                the development process by ensuring that the
                                props passed to a component conform to the
                                expected data types and values.
                            </p>
                        </div>

                        {/* third answer */}
                        <div className="qna">
                            <h3 className="question">
                                What is Different between Node.js and
                                Express.js?
                            </h3>
                            <p className="ans">
                                Node.js is a JavaScript runtime built on the V8
                                JavaScript engine. It allows developers to run
                                JavaScript on the server-side and execute code
                                outside of the web browser. Node.js provides a
                                set of core modules that enable developers to
                                build server-side applications in JavaScript.
                                Node.js is commonly used to build scalable
                                network applications, real-time web
                                applications, and command-line tools.
                                <br />
                                <br />
                                On the other hand, Express.js is a web
                                application framework built on top of Node.js.
                                Express.js provides a set of features and tools
                                for building web applications in Node.js. It
                                provides an easier way to handle HTTP requests
                                and responses, manage sessions, and create APIs.
                                Express.js also provides a middleware
                                architecture that allows developers to add
                                custom functionality to their web applications.
                            </p>
                        </div>

                        {/* forth answer */}
                        <div className="qna">
                            <h3 className="question">
                                What is customs hook and why we will create a
                                custom hook?
                            </h3>
                            <p className="ans">
                                Custom React JS hooks are reusable functions
                                that a React JS software developer can use to
                                add special and unique functionality to the
                                React applications. Usually, if there is a
                                requirement to add a feature, one can install a
                                third-party library and solve the problem.
                                <br />
                                <br />
                                Creating custom hooks in React is a way to
                                encapsulate and reuse logic that can be shared
                                between components. Custom hooks are functions
                                that utilize the built-in React hooks, such as
                                useState, useEffect, useContext, and useMemo, to
                                provide a specific functionality that can be
                                used across multiple components. One of the main
                                benefits of creating custom hooks is that it
                                allows developers to abstract complex logic into
                                a reusable and composable unit. This can lead to
                                cleaner and more maintainable code, as it
                                reduces the amount of duplicated code and makes
                                it easier to manage state and side effects
                                across different components.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;
