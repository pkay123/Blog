import React from "react";
import { Destination, Header } from "../component";
import Posts from "./Posts";

function HomePage() {
  return (
    <div className="app__homepage">
      <Header />
      <Destination />
      <Posts />
    </div>
  );
}

export default HomePage;
