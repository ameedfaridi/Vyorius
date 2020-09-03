import React from "react";
import "./App.css";
import NavBar from "./Component/NavBar";
import { Grid } from "@material-ui/core";
import LeftSide from "./Component/LeftSide";
import RightSide from "./Component/RightSide";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Grid container xs={12} className="App-container">
          <LeftSide />
          <Grid item xs={7}>
            <RightSide />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
