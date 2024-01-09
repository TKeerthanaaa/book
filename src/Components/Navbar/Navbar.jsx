
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex">
        <img
          src="https://thumbs.dreamstime.com/b/education-icon-symbol-women-learning-book-37471137.jpg"
          alt="logo"
          className="img"
        />
      </div>
      <ul className="flex gap-8 items-center mx-[7rem]">
        <li className="font-medium text-xl font-bold">
          <a href="/">Home</a>
        </li>
        <li className="font-medium text-xl font-bold">
          <a href="/book">Book</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
