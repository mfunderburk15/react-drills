import React, { Component } from "react";
import Image from "./components/Image";
import "./App.css";


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTc0NjYyNjI0ODg4MjM1Mzg2/science-of-earworms-explain-why-never-gonna-give-you-up-is-stuck-in-our-heads-30-years-later.png"} />
        <div>Never Gonna Give</div>
      </div>
    )
  }
}