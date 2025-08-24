/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
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
          <img src={logo} alt="cwn logo" className={"w-32 sm:w-[160px]"} />
        </Link>
        <div>
          <ul
            className={
              isMenuOpen
                ? "absolute pl-8 right-0 top-full flex flex-col py-8 gap-10 bg-white border-b-[1px] border-sub duration-500 ease-out w-screen xlg:flex-row xlg:py-0 xlg:w-fit xlg:border-none xlg:gap-12 xlg:static z-50"
                : "absolute pl-8 right-full top-full flex flex-col py-8 gap-10 bg-white border-b-[1px] border-sub duration-500 ease-out w-screen xlg:flex-row xlg:py-0 xlg:w-fit xlg:border-none xlg:gap-12 xlg:static z-50"
            }
          >
            {navLinks.map((link, i) => {
              return <NavLink link={link} key={i} onToggleNav={toggleNav} />;
            })}
            <Button
              text={"Start a Project"}
              href={"#contact"}
              styles="sm:hidden w-fit"
            />
            <ContactInfo containerStyles={"sm:hidden bg-white"} />
          </ul>
        </div>
        <div className="flex gap-4">
          <Button
            text={"Start a Project"}
            href={"#contact"}
            styles="hidden sm:block"
          />
          <img
            src={isMenuOpen ? cross : menu}
            alt="menu"
            className="w-9 cursor-pointer xlg:hidden"
            onClick={toggleNav}
          />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ link, onToggleNav }) {
  return (
    <li className="w-full">
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
        <img src={mail} alt="mail icon" className="w-5" />
        <span className="hover:text-inherit duration-200">
          codewithnaqvi@gmail.com
        </span>
      </a>
      <a
        href="tel:+923078875229"
        className="flex gap-1 items-center justify-center"
      >
        <img src={phone} alt="phone icon" className="w-4" />
        +923078875229
      </a>
      <a
        href="tel:+923054388079"
        className="flex gap-1 items-center justify-center"
      >
        <img src={phone} alt="phone icon" className="w-4" />
        +923054388079
      </a>
    </div>
  );
}
