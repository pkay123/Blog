import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./component";
import {
  Create,
  HomePage,
  Login,
  Posts,
  Register,
  Settings,
  SinglePost,
} from "./sections";
import ScrollToTop from "./component/Scroll";

function App() {
  return (
    <Router className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route path="/singlepost" element={<SinglePost />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
