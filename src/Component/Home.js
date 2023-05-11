import React, { useContext } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { CartContext } from "./CartContext";

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
  const { addToCart } = useContext(CartContext);

  const ItemsList = DUMMY_ITEMS.map((item) => (
    <Col key={item.title} xs={12} md={6} className=" my-3 ">
      <Card style={{ width: "55%" }}>
        <Card.Img variant="top" src={item.imageUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>$ {item.price}</Card.Text>
          <Button type="button" onClick={() => addToCart(item)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <>
      
      <Container>
        <Row className="justify-content-center">{ItemsList}</Row>
      </Container>
      <Container fluid className="mt-1 shadow bg-secondary text-center">
        <Row>
          <Col>
            <h1 className="justify-content-content">The Generics</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
