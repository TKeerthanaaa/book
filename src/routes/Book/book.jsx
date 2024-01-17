import React from "react";
import Main from "../../Components/Main";
import { useNavigate } from "react-router-dom";
import "../book/book.css"

const Book = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };
  return (
    <div>
      <Main />
      <button className="book-logout" onClick={handleSignOut}>
        Logout
      </button>
    </div>
  );
};

export default Book;
