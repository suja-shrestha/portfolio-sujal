import React from "react";
import "./project.css";
import Nav from "../nav/Nav";
import comming from "../../assets/comming.jpg";
import Screenshot1 from "../../assets/Screenshot1.png";
import Screenshot2 from "../../assets/Screenshot2.png";
import Screenshot3 from "../../assets/Screenshot3.png";
import Screenshot4 from "../../assets/Screenshot4.png";
import Foot from "../footer/foot";
const Project = () => {
  return (
    <>
      <Nav />
      <div className="container1">
        <h1
          style={{
            marginTop: "5%",
            textAlign: "center",
            fontSize: "60px",
          }}
        >
          My Projects
        </h1>
        <p
          style={{ textAlign: "center", paddingTop: "20px", fontSize: "20px" }}
        >
          Here are some of my projects
        </p>
        <div className="boxs">
          <div className="box">
            <img src={Screenshot1} alt="" />

            <p>
              This is an NGO webpage I designed and developed as a way to test
              and refine my skills in CSS, HTML, and JavaScript. I successfully
              deployed the webpage online using GitHub, making it accessible for
              others to view and interact with.
            </p>
            <button className="black p">Explore more</button>
          </div>
          <div className="box">
            <img src={Screenshot2} alt="" />

            <p>
              This is an NGO webpage I designed and developed as a way to test
              and refine my skills in CSS, HTML, and JavaScript. I successfully
              deployed the webpage online using GitHub, making it accessible for
              others to view and interact with.
            </p>
            <button className="black p">Explore more</button>
          </div>
          <div className="box">
            <img src={Screenshot3} alt="" />

            <p>
              This is an NGO webpage I designed and developed as a way to test
              and refine my skills in CSS, HTML, and JavaScript. I successfully
              deployed the webpage online using GitHub, making it accessible for
              others to view and interact with.
            </p>
            <button className="black p">Explore more</button>
          </div>
          <div className="box">
            <img src={Screenshot4} alt="" />

            <p>
              This is an NGO webpage I designed and developed as a way to test
              and refine my skills in CSS, HTML, and JavaScript. I successfully
              deployed the webpage online using GitHub, making it accessible for
              others to view and interact with.
            </p>
            <button className="black p">Explore more</button>
          </div>
          <div className="box">
            <img src={comming} alt="" />

            <p>
              This is an NGO webpage I designed and developed as a way to test
              and refine my skills in CSS, HTML, and JavaScript. I successfully
              deployed the webpage online using GitHub, making it accessible for
              others to view and interact with.
            </p>
            <button className="black p">Explore more</button>
          </div>
          <div className="box">
            <img src={comming} alt="" />

            <p>
              This is an NGO webpage I designed and developed as a way to test
              and refine my skills in CSS, HTML, and JavaScript. I successfully
              deployed the webpage online using GitHub, making it accessible for
              others to view and interact with.
            </p>
            <button className="black p">Explore more</button>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default Project;
