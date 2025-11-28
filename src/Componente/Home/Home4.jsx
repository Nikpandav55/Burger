import { Col, Container, Row } from "react-bootstrap";
import porimg from "../../assets/promotion/pro.png"
export default function Home4(){
    return(
        <>
        <section className="Promotion_Section">
        <Container>
            <Row className="align-items-center">
                <Col lg={6} className="text-center mb-5 mb-lg-0" >
                <img src={porimg} alt="promotion" className="img-fluid" />
                </Col>
                <Col lg={6} className="px-5" >
                <h2>Nothing brings people together like a good burger</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi voluptatum cum officiis reiciendis velit inventore quae ipsum quidem id accusamus, consequatur, quos perspiciatis molestias eius commodi maiores voluptatem quisquam! 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum saepe odit possimus, reiciendis ea amet quisquam voluptatem iusto quia fugit consectetur illum autem cum laborum, adipisci, animi ratione velit!
                </p>
                <ul>
                    <li><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam nihil consectetur, at amet voluptatem, doloribus deserunt deleniti in voluptatibus id rerum quidem error. Eius laboriosam autem vitae ut corporis doloremque!</p></li>
                    <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nemo excepturi animi? Aperiam non ratione perspiciatis, nisi laborum optio explicabo voluptas sit nihil consequatur vero dolorum quae magnam quaerat. Qui!</p></li>
                </ul>
                </Col>
            </Row>
        </Container>
        </section>
        <section className="bg_parallax_scroll"></section>
        </>
    )
}