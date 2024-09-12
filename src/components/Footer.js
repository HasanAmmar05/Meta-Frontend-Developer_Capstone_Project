import React from "react";
import logo from "../images/small_logo.png";
const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt=""></img>
          <p>
            We are a family Mediteranian restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
        </div>
        <div>
          <h3> Important Links </h3>
          <ul>
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="/"> About </a>
            </li>
            <li>
              <a href="/"> Menu </a>
            </li>
            <li>
              <a href="/"> Reservations </a>
            </li>
            <li>
              <a href="/"> Order Online </a>
            </li>
            <li>
              <a href="/"> Login </a>
            </li>
          </ul>
        </div>

        <div>
          <h3> Contact</h3>
          <ul>
            <li> Address: 123 Town City, USA</li>
            <li> Phone: +012345678</li>
            <li> Email: littleLemon@gmail.com</li>
          </ul>
        </div>


        <div>
            <h3> Socials</h3>
            <ul>
            <li>
              <a href="/"> Facebook </a>
            </li>
            <li>
              <a href="/"> Instagram </a>
            </li>
            <li>
              <a href="/"> Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
