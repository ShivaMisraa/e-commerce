import React, { useContext } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { Link, Route, Routes } from "react-router-dom";
import ProductsDetails from "../Products/ProductsDetails";
import DUMMY_ITEMS from "./DummyItems";



const Store = () => {
  const { addToCart } = useContext(CartContext);

  const ItemsList = DUMMY_ITEMS.map((item) => (
    <Col key={item.title} xs={12} md={6} className=" my-3 ">
      <Card className="m-auto" style={{ width: "55%" }}>
        <Card.Img variant="top" src={item.imageUrl} />
        <Card.Body>
          <Link to={`/products/${item.id}`}>
            <Card.Title>{item.title}</Card.Title>
          </Link>
          <Card.Text>$ {item.price}</Card.Text>
          <Button type="button" onClick={() => addToCart(item)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Container fluid className="bg-gradient p-5 d-flex justify-content-center">
      <Row className="justify-content-center">{ItemsList}</Row>
      <Routes>
        <Route path="/products/:productId" element={<ProductsDetails items={DUMMY_ITEMS} />} />
      </Routes>
    </Container>
  );
};

export default Store;
