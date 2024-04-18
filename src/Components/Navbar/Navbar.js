import React, { useState } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Lottie from "lottie-react";
import animationData from "./globe-animation.json";
import { Link } from "react-router-dom";
import { Link as Scrolllink} from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="nav-container">
      <div className="web-logo">
        <Lottie className="logo-icon" animationData={animationData} />
        <p>WanderWithUs</p>
      </div>

      <ul className="nav-links">
        <Link to="/">
          <a href="/">HOME</a>
        </Link>
        <Scrolllink
          to="short-escape"
          spy={true}
          smooth={true}
          offset={20}
          duration={500}
        >
          <a href="/">SHORT ESCAPES</a>
        </Scrolllink>
        <Scrolllink
          to="long-escape"
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
        >
          <a href="/">LONG ESCAPES</a>
        </Scrolllink>
        <Link to="/contactus">
          <a href="/contactus">CONTACT</a>
        </Link>
        <Link to="/aboutus">
          <a href="/aboutus">ABOUT</a>
        </Link>
      </ul>

      <ul className="authenticate-user">
        <Link to="/login-user">
          <a href="/login-user">LOGIN</a>
        </Link>
        <Link to="/signup-user">
          <a href="/signup-user">SIGN UP</a>
        </Link>
      </ul>

      <div className={isOpen ? "" : "hamburger-menu"}>
        <MenuIcon onClick={toggleMenu} />

        <ul className="responsive-nav">
          <Link to="/">
            <a href="/">HOME</a>
          </Link>
          <Scrolllink
            to="short-escape"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
          >
            <a href="/">SHORT ESCAPES</a>
          </Scrolllink>
          <Scrolllink
            to="long-escape"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
          >
            <a href="/">LONG ESCAPES</a>
          </Scrolllink>
          <Link to="/contactus">
            <a href="/contactus">CONTACT</a>
          </Link>
          <Link to="/aboutus">
            <a href="/aboutus">ABOUT</a>
          </Link>
          <Link to="/login-user">
            <a href="/login-user">LOGIN</a>
          </Link>
          <Link to="/signup-user">
            <a href="/signup-user">SIGN UP</a>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
