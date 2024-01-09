import React from "react";
import Home from "./routes/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/footer/footer";
import Book from "./routes/Book/book";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
