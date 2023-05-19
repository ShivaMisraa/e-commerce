import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



const ContactUs = () => {

    const detailsHandler = async () => {
        try {
          const name = document.getElementById("formBasicName").value;
          const email = document.getElementById("formBasicEmail").value;
          const phoneNumber = document.getElementById("formBasicPhoneNumber").value;
      
          const formData = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
          };
      
          const response = await fetch(
            "https://e-commerce-app-aab62-default-rtdb.firebaseio.com/details.json",
            {
              method: "POST",
              body: JSON.stringify(formData),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
      
          if (!response.ok) {
            throw new Error("Failed to send details.");
          }
      
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
      



  return (
    <Container style={{ width: "50%",  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', margin: '20px auto'  }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Phone Number" />
        </Form.Group>
        <Form.Group>
          <Form.Text className="text-muted">
            We'll never share your details with anyone else.
          </Form.Text>
        </Form.Group>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop:"15px" }}>
          <Button variant="primary" type="submit" onClick={detailsHandler}>
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ContactUs;
