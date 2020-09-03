import React from "react";
import { Grid } from "@material-ui/core";

const LeftSide = () => {
  return (
    <Grid item xs={5}>
      <div className="left-div">
        <h5 style={{ color: "rgb(255,69,0)" }}>CONECTING THE DISCONNECTED</h5>
        <h1>
          <span style={{ color: "rgb(255,69,0)" }}>Vyorius</span> brings
          unmanned robots
          <span style={{ color: "rgb(255,69,0)" }}> together</span>,
          <br /> wherever they are
        </h1>
        <h4>
          With all of the operations, commanding and maintenance tools in one
          place, unmanned vehicles will stay connected and productive no matter
          where you’re Delivering
        </h4>
        <div className="left-link-container">
          <a href="#" className="leftSide-link">
            Try Vyorius
          </a>
          <a
            href="#"
            className="leftSide-link"
            style={{
              border: "1px solid rgb(255,69,0)",
              color: "rgb(255,69,0)",
              background: "transparent",
            }}
          >
            Learn More
          </a>
        </div>
        <p
          style={{
            marginTop: "30px",
          }}
        >
          Need to order delivery? <a href="#">Get Started</a>
        </p>
      </div>
    </Grid>
  );
};

export default LeftSide;
