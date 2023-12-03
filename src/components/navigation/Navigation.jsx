/* eslint-disable no-unused-vars */
import "../../css/index.css";
import logo from "@icons/logo.svg";
import mail from "@icons/mail.svg";
import phone from "@icons/phone.svg";
import downArrow from "@icons/chivron-down.svg";
import menu from "@icons/menu.svg";
import cross from "@icons/cross.svg";
import Button from "@components/button/button";
import { useState } from "react";
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  // TODO: add dropdown to nav links
  // TODO: update info of top nav
  return (
    <nav className="border-b-[1px] border-sub">
      <div className="bg-secondary padding flex gap-8 justify-end text-para">
        <a
          href="mailto:info@codewithnaqvi.com"
          className="flex gap-2 items-center justify-center"
        >
          <img src={mail} alt="mail icon" className="w-5" />
          <span>contact@codewithnaqvi.com</span>
        </a>
        <a className="flex gap-1 items-center justify-center">
          <img src={phone} alt="phone icon" className="w-4" />
          +923074485229
        </a>
        <a className="flex gap-1 items-center justify-center">
          <img src={phone} alt="phone icon" className="w-4" />
          +923054388079
        </a>
      </div>
      <div className="padding flex justify-between items-center relative">
        <img src={logo} alt="cwn logo" />
        <div>
          <ul
            className={
              isMenuOpen
                ? "absolute pl-4 right-0 top-full flex flex-col py-8 gap-10 bg-white border-b-[1px] border-sub duration-500 w-screen xlg:flex-row xlg:py-0 xlg:w-fit xlg:border-none xlg:gap-12 xlg:static"
                : "absolute pl-4 right-full top-full flex flex-col py-8 gap-10 bg-white border-b-[1px] border-sub duration-500 w-screen xlg:flex-row xlg:py-0 xlg:w-fit xlg:border-none xlg:gap-12 xlg:static"
            }
          >
            <li>
              <a href="#" className="hover:text-main-shade duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-main-shade duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-main-shade duration-300">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-main-shade duration-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-main-shade duration-300">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-main-shade duration-300">
                Company
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <Button text={"Get in Touch"} href={""} />
          <img
            src={isMenuOpen ? cross : menu}
            alt="menu"
            className="w-9 cursor-pointer xlg:hidden"
            onClick={toggleNav}
          />

          {/* <img
            src={cross}
            alt="Close"
            className={"w-9 cursor-pointer xlg:hidden"}
          /> */}
        </div>
      </div>
    </nav>
  );
}
