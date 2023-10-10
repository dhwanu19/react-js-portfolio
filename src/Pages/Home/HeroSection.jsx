import React from "react";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section-title">Hey, I'm Dhwanish,</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--colour">
              {" "}
              B. Actuarial Studies/ Computer Science{" "}
            </span>{" "}
            <br />
            Student at UNSW
          </h1>
          <p className="hero--section--description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Autem blanditiis voluptatum sapiente quibusdam sed.
          </p>
        </div>
        <button className="btn btn-primary"> Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section"></img>
      </div>
    </section>
  );
}
