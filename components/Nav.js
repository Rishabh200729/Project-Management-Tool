import React from "react";
import Link from "next/Link";
import navStyles from "../styles/Nav.module.css";
import LoginBtn from "./login-btn";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <LoginBtn />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
