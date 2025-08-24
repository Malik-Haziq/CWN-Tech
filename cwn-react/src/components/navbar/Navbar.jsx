/* eslint-disable react/prop-types */
import "../../css/index.css";
import logo from "@icons/logo.svg";
import mail from "@icons/mail.svg";
import phone from "@icons/phone.svg";
import menu from "@icons/menu.svg";
import cross from "@icons/cross.svg";
import Button from "@components/button/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Services", path: "/services" },
    { text: "Solutions", path: "/solutions" },
    { text: "Courses", path: "/courses" },
    // { text: "Portfolio", path: "/portfolio" },
    // { text: "Blogs", path: "/blogs" },
    // { text: "Company", path: "/company" },
  ];

  // TODO: add dropdown to nav links
  // TODO: update info of top nav
  return (
    <nav>
      <Helmet>
        <title>Code With Naqvi - Learn Web Development</title>
        <meta
          name="description"
          content="Code With Naqvi offers React, Rails, and web dev tutorials."
        />
        <meta
          name="keywords"
          content="React, Rails, Web Development, Code With Naqvi"
        />
        <meta property="og:title" content="Code With Naqvi" />
        <meta
          property="og:description"
          content="React and Rails tutorials for developers."
        />
        <meta property="og:image" content="/cover-image.jpg" />
      </Helmet>
      <ContactInfo containerStyles={"hidden sm:flex"} />
      <div className="section flex justify-between items-center relative">
        <Link to="/">
          <img loading="lazy" src={logo} alt="cwn logo" className={"w-32 sm:w-[160px]"} />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden xlg:flex gap-12 items-center">
          {navLinks.map((link, i) => (
            <NavLink link={link} key={i} onToggleNav={toggleNav} />
          ))}
          <Button text={"Start a Project"} href={"#contact"} />
        </ul>

        {/* Mobile menu icon */}
        {!isMenuOpen && (
          <img loading="lazy"
            src={menu}
            alt="menu"
            className="w-9 cursor-pointer xlg:hidden"
            onClick={toggleNav}
          />
        )}

        {/* Mobile navigation overlay */}
        {isMenuOpen && (
          <ul className="fixed inset-0 flex flex-col items-center justify-center gap-8 bg-white z-50 xlg:hidden">
            <img loading="lazy"
              src={cross}
              alt="close menu"
              className="absolute top-4 right-4 w-9 cursor-pointer"
              onClick={toggleNav}
            />
            {navLinks.map((link, i) => (
              <NavLink link={link} key={i} onToggleNav={toggleNav} />
            ))}
            <Button text={"Start a Project"} href={"#contact"} />
          </ul>
        )}
      </div>
    </nav>
  );
}

function NavLink({ link, onToggleNav }) {
  return (
    <li className="w-full text-center xlg:w-fit">
      <Link
        to={link.path}
        className="hover:text-main-shade duration-300 block text-para"
        onClick={() => onToggleNav()}
      >
        {link.text}
      </Link>
    </li>
  );
}

function ContactInfo({ containerStyles }) {
  return (
    <div
      className={
        "bg-secondary text-para section flex items-center justify-center flex-col gap-4 sm:flex-row sm:gap-8 sm:justify-end " +
        containerStyles
      }
    >
      <a
        href="mailto:codewithnaqvi@gmail.com"
        className="flex gap-2 items-center justify-center hover:text-black py-3"
      >
        <img loading="lazy" src={mail} alt="mail icon" className="w-5" />
        <span className="hover:text-inherit duration-200">
          codewithnaqvi@gmail.com
        </span>
      </a>
      <a
        href="tel:+923078875229"
        className="flex gap-1 items-center justify-center"
      >
        <img loading="lazy" src={phone} alt="phone icon" className="w-4" />
        +923078875229
      </a>
      <a
        href="tel:+923054388079"
        className="flex gap-1 items-center justify-center"
      >
        <img loading="lazy" src={phone} alt="phone icon" className="w-4" />
        +923054388079
      </a>
    </div>
  );
}
