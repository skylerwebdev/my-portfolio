import React, { useState } from "react";
import i3 from "../../sources/images/bg4.png";
import "../../styles/Forms.css";
import "../../styles/Pages.css";

const Contact = () => {
  const [formData, setFormData] = useState({});
  const onSubmit = () => {
    alert(JSON.stringify(formData));
  };
  const handleInputChange = event => {
    event.persist();
    setFormData(formData => ({
      ...formData,
      [event.target.name]: event.target.value
    }));
  };
  return (
    <div className="mnDiv">
      <img src={i3} alt="" className="bannerImg"/>
      <h1>Contact SkylerWebDev</h1>
      <div className="mnBdy">
        <div className="ctcFrm">
          <form>
            <label htmlFor="fname">First Name:</label>
            <input
              onChange={handleInputChange}
              value={formData.fName}
              type="text"
              name="fName"
              placeholder="First Name"
            />

            <label htmlFor="lName">Last Name:</label>

            <input
              onChange={handleInputChange}
              value={formData.lName}
              type="text"
              name="lName"
              placeholder="Last Name"
            />
            <label htmlFor="email">Email:</label>

            <input
              onChange={handleInputChange}
              value={formData.email}
              type="email"
              name="email"
              placeholder="Email"
            />
            <label htmlFor="tel">Telephone:</label>

            <input
              type="tel"
              name="tel"
              onChange={handleInputChange}
              value={formData.tel}
              placeholder="Telephone"
            />
            <label htmlFor="inq">Inquiry:</label>

            <input
              type="textarea"
              name="inq"
              onChange={handleInputChange}
              value={formData.inq}
              placeholder="Inquiry"
            />

            <input type="button" value="Submit" onClick={onSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
