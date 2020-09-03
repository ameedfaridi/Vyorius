import React from "react";
import Grid from "@material-ui/core/Grid";
import logo from "../logo.png";
import Second from "../second-logo.png";
import DehazeIcon from "@material-ui/icons/Dehaze";

const Links = [
  {
    name: "Why Vyorius?",
    url: "#",
    size: 3,
  },
  {
    name: "Solutions",
    url: "#",
    size: 2,
  },
  {
    name: "Product",
    url: "#",
    size: 2,
  },
  {
    name: "Use Cases",
    url: "#",
    size: 2,
  },
  {
    name: "Team",
    url: "#",
    size: 2,
  },
  {
    name: "Partners",
    url: "#",
    size: 2,
  },
  {
    name: "Contact Us",
    url: "#",
    size: 2,
  },
];
const NavBar = () => {
  const toggle = () => {
    document.querySelector(".link-section").style.display = "block";
    document.querySelector(".btn").style.display = "block";
    document.querySelector(".DehazeIcon").style.display = "none";
    document.querySelector(".bttn").style.display = "block";
  };
  const againToggle = () => {
    document.querySelector(".link-section").style.display = "none";
    document.querySelector(".btn").style.display = "none";
    document.querySelector(".DehazeIcon").style.display = "block";
    document.querySelector(".bttn").style.display = "none";
  };
  return (
    <div>
      <Grid container xs={12} className="nav-container">
        <Grid item xs={2} className="logo-section">
          <img src={logo} style={{ margin: "auto 1rem" }} />
          <img src={Second} />
          <button className="bttn" onClick={againToggle}>
            X
          </button>
        </Grid>
        <Grid item xs={7} className="link-section">
          {Links.map((link, index) => (
            <Grid item xs={link.size} key={index}>
              <a href={link.url}>{link.name}</a>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={3} className="nav-btn-section">
          <button className="btn">Launch Vyorius {">"}</button>
          <DehazeIcon className="DehazeIcon" onClick={toggle} />
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;
