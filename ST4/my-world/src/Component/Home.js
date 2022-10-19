import React from "react";
// import Button from "react-bootstrap/Button";
import { Button } from "@material-ui/core";
import Card from "react-bootstrap/Card";
import "../CSS/Home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const navigateToDahsboard = () => {
    navigate("/form");
  };
  return (
    <div className="home">
      <img
        src="./banner'.webp"
        alt=""
        className="home__optionBanner"
      />
      
      <div className="home_optionContent">
        <Card className="card_main" style={{ width: "26rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body className="cards">
            <Card.Title className="cards_title">Click Here for Selection</Card.Title>
            <Card.Text className="cards-content">
              Now, You can send the form for playing in favour of the team
            </Card.Text>
            <Button
              onClick={navigateToDahsboard}
              className="card_button"
              style={{ backgroundColor: "gold", color: "black" }}
            >
              Apply Now!!!
            </Button>
          </Card.Body>
        </Card>
        <Card className="card_main" style={{ width: "26rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body className="cards">
            <Card.Title className="cards_title">In Team</Card.Title>
            <Card.Text className="cards-content">
              In our family the roster are <em style={{fontWeight:"bold", fontSize:"22px"}}> DeathMaker,Hellf, Amaterasu, Deadly10, Rite2Ace.</em><br />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card_main" style={{ width: "26rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body className="cards">
            <Card.Title className="cards_title">Content Creators</Card.Title>
            <Card.Text className="cards-content">
            As Gaming is full of content-creator so we we would like to annouce our top content-creator are:<br/>
            <em style={{fontWeight:"bold", fontSize:"22px"}}>Rackazone,Fa2,TBone,Lorbhatura,Pinkcess,Eclair</em>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
