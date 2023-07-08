import React, { useRef, useState, useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import TokenContext from "./TokenProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const authCtx = useContext(TokenContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_3JWCOWChStBPodZFKkdyTB_EMm_wHWA";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_3JWCOWChStBPodZFKkdyTB_EMm_wHWA";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("hii");
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        navigate("/store", { replace: true });
        // authCtx.login(data.idToken);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container
      style={{
        width: "50%",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        margin: "20px auto",
      }}
    >
      <Container>
        <p>To access Store please login</p>
      </Container>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Id</Form.Label>
          <Form.Control type="email" required ref={emailInputRef} />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required ref={passwordInputRef} />
        </Form.Group>

        {!isLoading && (
          <Button
            onClick={submitHandler}
            style={{
              margin: "15px auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {isLogin ? " Login" : " Create Account"}
          </Button>
        )}
        {isLoading && <p>Sending Request...</p>}
        <div
          onClick={switchAuthModeHandler}
          variant="primary"
          type="submit"
          style={{
            marginBottom: "15px ",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {isLogin ? "Create Account" : "Login with existing account"}
        </div>
      </Form>
    </Container>
  );
};

export default Login;
