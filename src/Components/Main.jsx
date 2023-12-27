import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./styles.css";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyD9WEOAN44VlpaiUF1qWkf5k6bLU_xbZvk" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="box1">
          <h1>
            That’s the thing about books.
            <br /> They let you travel without moving your feet.
          </h1>
        </div>
        <div className="box2">
          <h2>Find your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
};

export default Main;
