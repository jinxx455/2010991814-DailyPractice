import React from "react";
import "../About.css";

const About = () => {
  return (
    <div className="homeStyle bg-dark">
      <section className="about-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-6 col-md-12">
              <a to="/about" className="about-title">
                ABOUT VELOCITY GAMING
              </a>
              
              <p className="homeStyle-para">
                Velocity Gaming was started in 2019 by Manoj “Sentinel” Kasyap  , we are one of the most popular eSports brands in India , from being undefeated a whole year to being the first Indian team to represent India at global stage . Today well-driven by the passion of our owner as well as the growing fanbase , we’re becoming India’s biggest Esports organization.
              </p>
              <p className="mb-0 mt-1 homeStyle-para">
              After the successful journey in the Mobile community, Velocity Gaming entered into the PC scene with Valorant in July 27, 2020 by signing Team Vertigo, the org-less team, winners of the AMD Valorant Cup and Global Esports SEA Launch Tournament, comprised of players Tejas "rite2ace" Sawant, Anuj "Amaterasu" Sharma, Sabyasachi "Antidote" Bose, Karan "Excali" Mhaswadkar and Vibhor Vaid.
              </p>
            </div>
            <div className="col-md-12 mt-5 text-center">
              <h1 className="homeStyle-heading" style={{ fontSize: "60px" }}>
                Our Family
              </h1>
            </div>
            <div className="aboutOptionContent col-md-12">
            <div className="cards m-5 p-2 pb-0">
              <img
                src="https://velocitygaming.in/wp-content/uploads/2022/09/Anna.png"
                alt=""
                width="300"
                height="180px"
                className="center rounded m-1 mx-auto d-block"
              />
              <h1 className="text-center" style={{color:"gold"}}>Manoj "Sentinel" Kasyap</h1>
              <p className="m-3" style={{color:"white"}}>Manoj “Sentinel” Kasyap is a Harvard Alumni and also the owner of Velocity Gaming . He started his journey in eSports during his college time when he used to play for his college club .</p>
            </div>
            <div className="cards m-5 p-2 pb-0">
              <img
                src="https://velocitygaming.in/wp-content/uploads/2022/10/ck.png"
                alt=""
                width="300"
                height="180px"
                className="center rounded m-1 mx-auto d-block"
              />
              <h1 className="text-center" style={{color:"gold"}}>Lalith "CK" Basavaraju</h1>
              <p  className="m-3" style={{color:"white"}}>Lalith “CK” Basavaraju is the co-owner of velocity gaming. He started gaming at a very early age predominantly focusing on console games , during his college days he had also tried his luck in competitive pubgm (bgmi) qualifying to the top echelons of the game.</p>
            </div>
            <div className="cards m-5 p-2">
              <img
                src="https://velocitygaming.in/wp-content/uploads/2022/09/Eupho.jpg"
                alt=""
                width="300"
                height="180px"
                className="center m-1 mx-auto d-block"
              />
              <h1 className="text-center" style={{color:"gold"}}>Adarsh “Eupho” Singh</h1>
              <p className="m-3" style={{color:"white"}}>Adarsh “Eupho” Singh is manager of Velocity Gaming working with VLT from the start of our Valorant Lineup , he used to play CSGO semi-professionally</p>
            </div>
          </div>
          <div className="aboutOptionContent col-md-12">
            <div className="cards m-5 p-2 pb-0">
              <img
                src="https://velocitygaming.in/wp-content/uploads/2022/09/Screenshot-2022-09-15-at-1.26.52-AM-2048x2046.png "
                alt=""
                width="300"
                height="180px"
                className="center rounded m-1 mx-auto d-block"
              />
              <h1 className="text-center" style={{color:"gold"}}>Pranay Goyal</h1>
              <p className="m-3" style={{color:"white"}}>Pranay Goyal is the Creative Director / Content Manager for Velocity Gaming , He has a degree in Design & Motion and started in Velocity Gaming as the Head of Design Department</p>
            </div>
            <div className="cards m-5 p-2 pb-0">
              <img
                src="https://velocitygaming.in/wp-content/uploads/2022/09/Amaterasu.jpg"
                alt=""
                width="300"
                height="180px"
                className="center rounded m-1 mx-auto d-block"
              />
              <h1 className="text-center" style={{color:"gold"}}>Amaterasu - Anuj Sharma</h1>
              <p  className="m-3" style={{color:"white"}}>The commander of our Valorant Roster Anuj “Amaterasu” Sharma is currently the IGL of the team , he is also considered one of the best minds in the Indian circuit  . He previously played CS:GO with Entity Gaming ..</p>
            </div>
            <div className="cards m-5 p-2">
              <img
                src="https://velocitygaming.in/wp-content/uploads/2022/09/Rite2ace.jpg"
                alt=""
                width="300"
                height="180px"
                className="center m-1 mx-auto d-block"
              />
              <h1 className="text-center" style={{color:"gold"}}>Rite2Ace - Tejas Sawant</h1>
              <p className="m-3" style={{color:"white"}}>Rite2Ace is an ex-CS:GO player who spent his time playing for Team Entity Gaming . He is one of the most experienced Esports athletes in India . He was also the first player in India to hit Radiant.</p>
            </div>
          </div>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default About;
