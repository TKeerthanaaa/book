import React from "react";
import { useUser } from "../Context/Usercontext";
import Login from "./login";
import Book from "../routes/Book/book";

const Private = () => {
  const storedEmail = localStorage.getItem("userEmail");
  console.log(storedEmail);
  return storedEmail ? <Book /> : <Login />;
};

export default Private;
