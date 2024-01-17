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
          <img
            className="book-one"
            src="https://i.pinimg.com/originals/c8/b0/7e/c8b07e380215edaaa1903769586a61dc.jpg"
            alt=""
          />
          <h5 className="content">
            Everything has BEAUTY, but not everyone sees it.
          </h5>
        </div>
      </div>

      <div className="skills">
        <section className="skill-image">
          <img
            src="https://image.slidesdocs.com/responsive-images/background/education-bookshelf-light-powerpoint-background_403075a551__960_540.jpg"
            alt="book-library"
          />
        </section>
        <section className="skill-content">
          <img
            className="child-img"
            src="https://img.freepik.com/premium-photo/group-children-reading-book-library_815088-537.jpg"
            alt=""
          />
          <ul>
            <li>Improving Your Vocabulary</li>
            <li>Enhancing Mental Wellbeing</li>
            <li>Expanding Your Knowledge</li>
            <li>Improving Emotional Intelligence</li>
            <li>Boosting Your Imagination</li>
          </ul>
        </section>
      </div>
      <div className="book-quotes">
        <h2>
          <span>“</span>That is part of the beauty of all literature. You
          discover that your longings are universal longings, that you’re not
          lonely and isolated from anyone. You belong. ― F. Scott Fitzgerald
        </h2>
      </div>
      <div className="authors">
        <section className="author">
          <div className="author-details">
            <img
              className="author-img"
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/William_Shakespeare_by_John_Taylor.jpg"
              alt="william_shakespeare"
            />
            <div className="author-content">
              <p className="author-quotes">
                William Shakespeare (26 April 1564 (baptised) – 23 April 1616)
                was an English poet, playwright, and actor, widely regarded as
                the greatest writer in the English language and the world's
                pre-eminent dramatist. He is often called England's national
                poet and the “Bard of Avon”.
              </p>
              <p className="author-name">William Shakespeare</p>
            </div>
          </div>
          <div className="author-details">
            <img
              className="author-img"
              src="https://images.immediate.co.uk/production/volatile/sites/7/2022/06/GettyImages-541074915-ed8014f.jpg?resize=768,574"
              alt="william_shakespeare"
            />
            <div className="author-content">
              <p className="author-quotes">
                George Orwell was born Eric Arthur Blair on June 25, 1903, at
                Montihari in Bengal, India, where his father was a minor British
                official. His family had social status but little money. This
                fact influenced Orwell's later attitude toward the English class
                system and the British Empire's treatment of its subject
                peoples.
              </p>
              <p className="author-name">George Orwell</p>
            </div>
          </div>
          <div className="author-details">
            <img
              className="author-img"
              src="https://m.media-amazon.com/images/M/MV5BYThmNTI1MDAtOTYxOC00Y2IyLWJlZTMtN2VmYTgwMGVhNTYyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_.jpg"
              alt="author"
            />
            <div className="author-content">
              <p className="author-quotes">
                (1882–1941). Virginia Woolf was born Virginia Stephen in London
                on January 25, 1882, and was educated by her father, Sir Leslie
                Stephen. After his death she set up housekeeping in Gordon
                Square in the district of Bloomsbury in London.
              </p>
              <p className="author-name">Virginia Woolf</p>
            </div>
          </div>

          <div className="author-details">
            <img
              className="author-img"
              src="https://m.media-amazon.com/images/S/amzn-author-media-prod/8cigckin175jtpsk3gs361r4ss.jpg"
              alt="william_shakespeare"
            />
            <div className="author-content">
              <p className="author-quotes">
                Joanne Rowling, or more famously known as J.K. Rowling, was born
                in Yates, England in 1965. Her father, Peter, was an aircraft
                engineer (a very difficult job that involves designing
                airplanes) and her mother, Anne, was a science technician, but
                J.K. didn't want to work in the sciences or be an engineer.
              </p>
              <p className="author-name">J.K. Rowling</p>
            </div>
          </div>
        </section>
        <section className="author">
          <div className="author-details">
            <img
              className="author-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaro_46bm-IQXt23EIhayT2QmqkxEJUNcbPG7xxEeW6kge8mJl9O9GbeMnNr77Fj_nxAQ&usqp=CAU"
              alt="william_shakespeare"
            />
            <div className="author-content">
              <p className="author-quotes">
                Ernest Hemingway was born on July 21, 1899, in Oak Park,
                Illinois, a Chicago suburb. His father was a doctor. After high
                school Hemingway got a job as a reporter on the Kansas City
                Star. During World War I he tried to enlist in the armed forces
                but was rejected because of an old eye injury.
              </p>
              <p className="author-name">Ernest Hemingway</p>
            </div>
          </div>
          <div className="author-details">
            <img
              className="author-img"
              src="https://cdn.britannica.com/69/129569-050-D1675E26/William-Faulkner-photograph-Carl-Van-Vechten-1954.jpg"
              alt="william_shakespeare"
            />
            <div className="author-content">
              <p className="author-quotes">
                Born in New Albany, Mississippi, in 1897, William Faulkner (born
                Falkner) was named for and raised in the shadow of his
                great-grandfather William Clark Falkner ("The Colonel"), a man
                known for his adventurous life as a soldier, politician, and
                author in Oxford, Mississippi.
              </p>
              <p className="author-name">William Faulkner</p>
            </div>
          </div>
          <div className="author-details">
            <img
              className="author-img"
              src="https://b2294532.smushcdn.com/2294532/wp-content/uploads/2023/02/Ayn-Rand-1-803x1024.jpg?lossy=0&strip=1&webp=1"
              alt="william_shakespeare"
            />
            <div className="author-content">
              <p className="author-quotes">
                Ayn Rand was born in St. Petersburg, Russia, on February 2,
                1905. When the tsarist regime was overthrown in the Russian
                Revolution of 1917, her family moved to Crimea, where she
                finished high school. She returned to Russia in 1921 and then
                moved to the United States in 1926.
              </p>
              <p className="author-name">Ayn Rand</p>
            </div>
          </div>
          <div className="author-details">
            <img
              className="author-img"
              src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Revolutionary_Joyce_Better_Contrast.jpg"
              alt="william_shakespeare"
            />
            <div className="author-content">
              <p className="author-quotes">
                James Augustine Joyce was born on February 2, 1882, in Dublin,
                Ireland. At the age of six and a half, he was enrolled at
                Clongowes Wood College, a Jesuit School for Boys in Ireland's
                County Kildare. Eventually his family withdrew him from
                Clongowes, lacking the tuition.
              </p>
              <p className="author-name">James Joyce</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
