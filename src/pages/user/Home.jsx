import React from "react";
import "../../styles/Pages.css";
import i1 from "../../sources/images/bg1.png";
import skyler from "../../sources/images/skyler.png";
import Freelance from "./Freelance";
const Home = () => {
  return (
    <div className="mnDiv">
      <div className="bannerContainer">
        <img className="bannerImg" src={i1} alt="bannerImg" />
      </div>
      <div className="mnHdr">
      </div>
      <div className="mnBdy">
        <div className="mnBdyTp">
          <div className="mnBdyTpRt">
            <div className="photoContainer">
              <img className="pfolioPhoto" src={skyler} alt="skyler photo" />
            </div>
          </div>
          <div className="mnBdyTpLft">
            <p className="mnBdyTpLftP">
              My name is Skyler Dowdy (Skylerwebdev). I am 32 years old, have 4
              wonderful children, and an amazing wife that I have been with
              since I was 15. I am a hard worker and most of the time I tend to
              learn things at a faster pace than most people.
            </p>
            <p className="mnBdyTpLftP">
              A few things you should know about me:
            </p>
            <ol className="mnBdyTpLftOl">
              <li>I believe that family should come before all else.</li>
              <li>
                {" "}
                I don’t care what your political, sexual orintation veiws, etc.
                Neither should you.
              </li>
              <li>
                {" "}
                I will work very hard to make sure my customers are pleased with
                my work.
              </li>
              <li>
                {" "}
                I will learn anyting I need to in order to get a job done.
              </li>
              <li>
                {" "}
                I am a very professional person (in a business setting) in a
                personal setting I may not be professional; I will always
                conduct myself in that manner.
              </li>
            </ol>
            <p className="mnBdyTpLftP">
            One important thing I have learned in life, in order to succeed you need to be yourself. It doesn’t matter what it is in life that you want to do. Do not ever let it change the person that you are inside.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
