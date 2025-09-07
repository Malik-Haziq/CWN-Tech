/* eslint-disable react/prop-types */
import "../../css/index.css";
import logo from "@icons/logo.svg";
import mail from "@icons/mail.svg";
import phone from "@icons/phone.svg";
import menu from "@icons/menu.svg";
import cross from "@icons/cross.svg";
import Button from "@components/button/button";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleNav = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      // Ensure scroll is restored if component unmounts or effect re-runs unexpectedly
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu and restore scroll on route change or back/forward navigation
  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
    document.body.style.overflow = "";
  }, [location.pathname]);

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Services", path: "/services" },
    { text: "Solutions", path: "/solutions" },
    { text: "FAQ", path: "/#faq" },
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
      <div
        className={`section flex justify-between items-center relative sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-light-gray ${
          isScrolled ? "shadow-card" : ""
        }`}
      >
        <Link to="/">
          <img loading="lazy" src={logo} alt="cwn logo" className={"w-32 sm:w-[160px]"} />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden xlg:flex gap-10 items-center">
          {navLinks.map((link, i) => (
            <NavLink link={link} key={i} activePath={location.pathname} />
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
          <div className="fixed inset-0 z-[100] xlg:hidden bg-white flex min-h-screen flex-col overscroll-contain">
            {/* Header */}
            <div className="px-5 py-4 flex items-center justify-between border-b border-light-gray">
              <Link to="/" onClick={closeMenu} className="shrink-0">
                <img src={logo} alt="cwn logo" className="w-28" />
              </Link>
              <img
                src={cross}
                alt="close menu"
                className="w-8 cursor-pointer"
                onClick={toggleNav}
              />
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-6 py-2">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`block w-full py-3 px-2 text-lg font-normal rounded-lg ${
                        location.pathname === link.path ? "text-main" : "text-para"
                      } hover:bg-light-gray`}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* CTA placed beneath the links and kept visible */}
              <div className="sticky bottom-0 bg-white pt-2 pb-3 border-t border-light-gray mt-2">
                <Button text={"Start a Project"} href={"#contact"} styles="w-full text-center block" />
              </div>
            </div>

            {/* bottom spacer for safe area */}
            <div className="pb-[max(env(safe-area-inset-bottom),16px)]" />
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ link, onToggleNav, activePath }) {
  return (
    <li className="w-full text-center xlg:w-fit">
      <Link
        to={link.path}
        className={`group relative inline-block px-1 text-para hover:text-main-shade duration-300 ${
          activePath === link.path ? "text-main-shade" : ""
        }`}
        onClick={() => onToggleNav && onToggleNav()}
      >
        {link.text}
        <span
          className={`absolute -bottom-1 left-0 h-0.5 bg-main transition-all duration-300 ${
            activePath === link.path ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
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
