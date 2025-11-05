import React from "react";
import Nav from "../nav/Nav";
import "./hero.css";
import background from "../../assets/background.png";
import { TypeAnimation } from "react-type-animation";
import Foot from "../footer/foot";
import { Link } from "react-router-dom";
import images from "../../assets/images.jpg";

const Hero = () => {
  return (
    <>
      <Nav />

      <div className="container1">
        <div className="hero-paragraphs">
          <div className="left-paragraph">
            <div className="type">
              <h1 className="text">
                <TypeAnimation
                  sequence={["Hello Everyone!", 500]}
                  wrapper="span"
                  cursor={true}
                  repeat={null}
                />
              </h1>
            </div>

            <p>
              I am a Front-End Developer passionate about building responsive
              and user-friendly web interfaces. Skilled in modern web
              technologies like HTML, CSS, JavaScript, and frameworks such as
              React. Dedicated to crafting seamless user experiences and
              visually appealing designs.
            </p>

            <a
              href="https://1drv.ms/b/c/d6b4f9a5d785190e/ESI2Ds_cLB1Dtuy1qEmMNqMBt35y9uteEH9ouLj99vtNzg?e=5cfP4g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="white">View My Resume</button>
            </a>
            <Link className="link" to="/project">
              <button className="black">Explore Projects</button>
            </Link>

            <div className="social-iconss">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="right-paragraph">
            <div className="rotate">
              <div className="rotate1">
                <img src={images} alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default Hero;
