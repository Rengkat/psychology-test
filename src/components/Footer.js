import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#6e0ca7] h-[20vh] p-5">
      <ul className=" flex justify-center items-center space-x-3 p-5  ">
        <li className="footerNav">
          <Link to="/" className="footerLink">
            <span>Home</span>
          </Link>
        </li>
        <li className="footerNav">
          <Link to="/test" className="footerLink">
            <span>Test</span>
          </Link>
        </li>
        <li className="footerNav">
          <Link to="/career" className="footerLink">
            <span>Career</span>
          </Link>
        </li>
        <li className="footerNav">
          <Link to="/blog" className="footerLink">
            <span className="pb-2">Blog</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
