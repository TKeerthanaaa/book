import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="cook">
          <div className="box">
            <img
              className="cooking"
              src="https://t4.ftcdn.net/jpg/05/80/88/85/360_F_580888588_tmIGs41mJKdzLtT1ZK8HVcoZYwlBIiZq.jpg"
              alt="book"
            />
            <button className="btn">
              <a href="/book">View Books</a>
            </button>
          </div>

          <p className="description">
            "When I look back, I am so impressed again with the life-giving
            power of literature. If I were a young person today, trying to gain
            a sense of myself in the world, I would do that again by reading,
            just as I did when I was young."
            <span> – Maya Angelou</span>
          </p>
        </div>

        <div className="image">
          <img className="book-one" src="public\images\books-1.jpg" alt="" />
          <h5 className="content">
            Everything has BEAUTY, but not everyone sees it.
          </h5>
        </div>
      </div>
    </>
  );
};

export default Home;
