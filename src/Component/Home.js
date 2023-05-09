import React,{useState} from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  faYoutube,
  faSpotify,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const DUMMY_ITEMS = [
  {
    title: "Colors",
    price: 110,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Home = () => {
  const ItemsList = DUMMY_ITEMS.map((item) => (
    <Col key={item.title} xs={12} md={6} className=" my-3 ">
      <Card style={{ width: "55%" }}>
        <Card.Img variant="top" src={item.imageUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>$ {item.price}</Card.Text>
          <Button type="submit"  >Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  


  return (
    <>
      <Container fluid className="mt-1 shadow bg-secondary text-center">
        <Row>
          <Col>
            <h1 className="justify-content-content">The Generics</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">{ItemsList}</Row>
      </Container>
      <Container className="mt-3 text-center">
        <Button className="mx-auto d-block">See the Cart</Button>
      </Container>

      <Container fluid className="mt-2">
        <footer className="bg-secondary text-white">
          <Container>
            <Row className="justify-content-between">
              <Col>
                <h1>The Generics</h1>
              </Col>
              <Col className="d-flex justify-content-end mt-2">
                <FontAwesomeIcon icon={faYoutube} className="mx-3" size="2x" />
                <FontAwesomeIcon icon={faSpotify} className="mx-3" size="2x" />
                <FontAwesomeIcon icon={faFacebook} className="mx-3" size="2x" />
              </Col>
            </Row>
          </Container>
        </footer>
      </Container>
    </>
  );
};
export default Home;
