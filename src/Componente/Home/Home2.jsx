import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";
import pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/Salad.png"
import Delivery from "../../assets/about/Delivery-bike.png"
const mockData = [
    {
        image: pizza,
        title: "Original",
        paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
        image: Salad,
        title: "Qualty Foods",
        paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
        image: Delivery,
        title: "Fastest Delivery",
        paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },

];
export default function Home2() {
    return (
        <>
            <section className="about_section">
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className="text-center">
                            <h2>The Burger Tastes Better When you eat it with your Family</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Cum dolorum velit saepe delectus qui hic corrupti distinctio quos sit expedita,
                                accusantium neque nemo autem iusto, quia quis adipisci totam fugit?
                            </p>
                            <Link to="/" className="btn order_now btn-danger">
                                Explore Full Menu
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about_Wrapper">
                <Container>
                    <Row className="justify-content-md-center">
                        {mockData.map((cardData, index) => (<Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                            <div className="about_box text-center">
                                <div className="about_icon">
                                    <img src={cardData.image} className="img-fluid" alt="icon" />
                                </div>
                                <h4>{cardData.title}</h4>
                                <h3>{cardData.paragraph}</h3>

                            </div>
                        </Col>))}
                    </Row>
                </Container>
            </section>

        </>
    )
}