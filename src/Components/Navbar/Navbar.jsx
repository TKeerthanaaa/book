import "./style.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="container h-[7rem] flex item-center justify-between">
        <Link to="/">
          {" "}
          <img
            src="https://thumbs.dreamstime.com/b/education-icon-symbol-women-learning-book-37471137.jpg"
            alt="logo"
            className="img"
          />
        </Link>
      </div>
      <ul className="flex gap-10 items-center mx-[12rem]">
        <li className="font-medium text-xl font-bold">
          <Link to="/">HOME</Link>
        </li>
        <li className="font-medium text-xl font-bold">
          <Link to="/book">BOOK</Link>
        </li>
      </ul>
      <button className="" onClick={handleSignOut}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
