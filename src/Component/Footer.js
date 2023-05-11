import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import {  Row, Col } from "react-bootstrap";

import React from "react";

function Footer() {
  return (
    <>
      <footer className="mt-1 shadow bg-dark text-center text-neon-blue py-3 m-auto">
        <div>
          <Row className="mt-3">
            <Col xs={12} md={4} className="mb-2 mb-md-0">
              <h1 style={{ color: "white" }}>The Generics</h1>
            </Col>
            <Col xs={12} md={4} className="mb-2 mb-md-0">
              <a href="https://www.instagram.com">
                <FaInstagram size={30} className="mr-3 text-neon-blue" />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebookF size={30} className="mr-3 text-neon-blue" />
              </a>
              <a href="https://www.youtube.com">
                <FaYoutube size={30} className="text-neon-blue" />
              </a>
            </Col>
            <Col xs={12} md={4} className="mt-3">
              <p style={{ color: "white" }}>
                &copy; 2023 The Generics. All rights reserved.
              </p>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
}

export default Footer;
