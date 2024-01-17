import React from "react";
import Home from "./routes/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/footer/footer";
import Book from "./routes/Book/book";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./page/login";
import SignUp from "./page/SignUp";
import Private from "./page/Private";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="" element={<Private />}>
            <Route path="/book" element={<Book />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
