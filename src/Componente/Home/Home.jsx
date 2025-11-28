
import { Container,Row,Col } from "react-bootstrap"
import "../hederfooter/Header.css"
import burgur from '../../assets/hero/hero-2.png'
import '../../Componente/Home/Home.css'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero_home">
      <Container>
      <Row> 
          <Col lg={7} className="mb-5 mblg-0"> 
            <div className="position-relative"> 
              <img src={burgur} className="img-fluid" alt="hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h3 className="h3_lg">₹199</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
          <div className="hero_text text-center">
            <h1 className="text-white">Crispy Chicken Burger</h1>
            <h2 className="text-white">With Onion</h2>
            <p className="text-white pt-2 pb-4">
              Feugiat primis Ligula risus autor laoreet augue egests Mauris 
              viverra tortor in iaculis pretium a magna mauris imsum primis 
              rhoncus feugiat.
            </p>
            <Link to="/" className="btn Order_now btn-warning btn-outline-primary">
            Order Now
            </Link>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    
  )
}