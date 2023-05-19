import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { PlayFill } from "react-bootstrap-icons";

const tourData = [
  {
    date: "JUL16",
    city: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
    buttonLabel: "Buy Tickets",
  },
  {
    date: "JUL19",
    city: "TORONTO,ON",
    venue: "BUDWEISER STAGE",
    buttonLabel: "Buy Tickets",
  },
  {
    date: "JUL22",
    city: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
    buttonLabel: "Buy Tickets",
  },
  {
    date: "JUL29",
    city: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
    buttonLabel: "Buy Tickets",
  },
  {
    date: "AUG2",
    city: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
    buttonLabel: "Buy Tickets",
  },
  {
    date: "AUG7",
    city: "CONCORD, CA",
    venue: "CONCORD PAVILION",
    buttonLabel: "Buy Tickets",
  },
];

function HomePage() {
  return (
    <>
      <header
        style={{ backgroundColor: "grey", color: "white", padding: "1rem" }}
      >
        <h1
          className="d-flex justify-content-center mt-2"
          style={{ display: "inline-block", marginRight: "1rem" }}
        >
          The Generics
        </h1>
        <br />
        <div className="d-flex justify-content-center">
          <Button variant="secondary" className="btn-outline-primary text-white">Get Our Latest Album</Button>
        </div>
        <div className="d-flex justify-content-center mt-4">
        <Button variant="secondary" className="btn-outline-primary " style={{ marginLeft: "1rem" }}>
  <PlayFill size={20} />
</Button>

        </div>
      </header>
      <Container>
        <h2>Tours</h2>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>City</th>
              <th>Venue</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tourData.map((tour) => (
              <tr key={tour.date}>
                <td>{tour.date}</td>
                <td>{tour.city}</td>
                <td>{tour.venue}</td>
                <td>
                  <Button variant="outline-primary">{tour.buttonLabel}</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default HomePage;
