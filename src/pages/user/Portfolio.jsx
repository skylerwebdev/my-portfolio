import React from "react";
import i2 from "../../sources/images/bg3.png";
import edu from "../../sources/images/eduforall.png";
import skills from "../../sources/images/skills.png";
import oscont from "../../sources/images/oscont.png";

import cc1 from "../../sources/images/cc1.png";
import cc2 from "../../sources/images/cc2.png";
2;
const Portfolio = () => {
  return (
    <div className="mnDiv">
      <div className="bannerContainer">
        <img className="bannerImg" src={i2} alt="banner" />
      </div>
      <div className="mnHdr"></div>
      <div className="mnBdy">
        <div className="mnBdyTp">
          <div className="mnBdyTpRt">
            <div className="photoSkills">
              <img src={skills} alt="" />
              <img src={oscont} alt="" />
            </div>
          </div>
          <div className="mnBdyTpLft">
            <div className="projConts">
              <div className="projContTop">
              <div className="projPic">
                <img src={edu} alt="edu" />
              </div>
              </div>
              <div className="mnBdyTpRt">
                <p className="projHdr">
                  <a href="https://eduforall.tech">Education For All</a>
                </p>
                <p className="projP">
                  Education for all is a personal project that I have been
                  working on. It is a website that I will eventually (within the
                  next 6 months) that I will be using to provide “Introduction
                  to Bootcamp” courses.
                  <p className="projP">Tech Used:</p>
                  <ul className="tech">
                    <li>React</li>
                    <li>CSS</li>
                  </ul>
                  <p className="projP"> Future Tech:</p>
                  <ul className="tech">
                    <li>Java/Spring API</li>
                    <li>API Connection</li>
                  </ul>
                </p>
              </div>
            </div>
              <div className="mnBdyTpLft">
            <div className="projContbtm">
              <div className="projPic">

                <img src={cc1} alt="comcal1" />
                <img src={cc2} alt="comcal2" />
              </div>
              <div className="mnBdyTpRt">
                <p className="projHdr">
                  <a href="https://ourcommunitycalendar.xyz">
                    Community Calendar
                  </a>
                </p>
                <p className="projP">
                  Community Calendar is a webpage that was created to make it
                  easier for local communities to create events and connect to
                  others in their communities. I was the lead on the project. We
                  built the site out in 8 weeks.
                  <p className="projP">Tech Used:</p>
                  <ul className="tech">
                    <li>React</li>
                    <li>Node.JS</li>
                    <li>Graph QL</li>
                    <li>Apollo Client</li>
                    <li>Heroku</li>
                    <li>AWS</li>
                    <li>Netlify</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Portfolio;
