import React, { useState } from "react";
import "./Support.scss";
import Faq from "../../Components/FAQ/Faq";
import Prem from "../../Components/Prem/Prem";
import cart from "../../Assets/images/Sub(2).png";
import India from "../../Assets/images/Image (9).svg";
import { IoMdArrowDropdown } from "react-icons/io";
const Support = () => {
    const [opendrop, setdrop] = useState (false)
    const handleClick = ()=>{
        setdrop(!opendrop)
    }
  return (
    <div className="Support">
      <div className="container">
        
          <div className="Sub-info">
            <h2>Welcome to our support page!</h2>
            <p>
              We're here to help you with any problems you may be having with
              our product.
            </p>
            <img src={cart} alt="" />
          </div>
          <div className="Sub-form">
            <form action="/Submit" className="support-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="form-group phone-input">
                  <label htmlFor="phone">Phone Number</label>
                  <div className="phone-wrapper">
                    <div className="drop">
                      <span className="flag" onClick={handleClick}>
                        <img src={India} alt="" /> <IoMdArrowDropdown />
                      </span>
                      <div className={opendrop ? "downs" : "downs active"}>
                        <span className="ArrowDown">
                          <img src={India} alt="" />{" "}
                        </span>
                        <span className="ArrowDown">
                          <img src={India} alt="" />{" "}
                        </span>
                      </div>
                    </div>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your Message"
                />
              </div>

              <div className="form-footer">
                <label className="checkbox">
                  <input type="checkbox" required />I agree with Terms of Use
                  and Privacy Policy
                </label>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
       

        <Faq />
        <Prem />
      </div>
    </div>
  );
};

export default Support;
