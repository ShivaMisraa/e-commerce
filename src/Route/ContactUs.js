import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactUs = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  async function detailsHandler(event) {
    event.preventDefault();

    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phonenumber: phoneRef.current.value
    };
    console.log(userData);

    const response = await fetch("https://e-commerce-app-aab62-default-rtdb.firebaseio.com/usercontactdetails.json", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    console.log(data);

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  }

  return (
    <Container style={{ width: "50%", boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', margin: '20px auto' }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" id="name" ref={nameRef} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id="email" ref={emailRef} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Phone Number" id="phonenumber" ref={phoneRef} />
        </Form.Group>
        
        <Form.Group>
          <Form.Text className="text-muted">
            We'll never share your details with anyone else.
          </Form.Text>
        </Form.Group>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: "15px" }}>
          <Button variant="primary" type="submit" onClick={detailsHandler}>
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ContactUs;
