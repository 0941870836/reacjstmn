import React, { Component } from "react";

export default function Intro() {
  return (
    <section className="intro">
      <div className="overflow"></div>
      <img src="./img/20.jpg" />
      <div className="content">
        <div>
          <h3 className="head-title">
            Getting started with <b>TMN SHOP</b>
          </h3>
          <p className="head-subtitle">
            We pride ourselves on providing the most up-to-date content for
            <br />
            our students to learn each course
          </p>
        </div>
      </div>
      {/* <div className="arrow-down" onClick={this.scrollDown}>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </section>
  );
}
