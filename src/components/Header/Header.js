import React from "react";
import "./header.scss";
import logo from "../../Images/Logos/Logo.png";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import {
  CONSUMERPAGE,
  MYCARTPAGE,
  REGISTERPAGE,
  SELLONPAGE,
  SIGNINPAGE,
} from "../../Paths/paths";
import userPhoto from "../../Images/Photo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <div className="header__inner__leftLine">
            <div className="header__inner__logo">
              <img
                src={logo}
                alt="logo"
                className="header__inner__logo__logo"
              />
            </div>
            <Link to={SELLONPAGE} className="header__inner__leftLine__link">
              Sell on Shopka
            </Link>
            <Link to={REGISTERPAGE} className="header__inner__leftLine__link">
              Register
            </Link>
          </div>
          <AiOutlineSearch className="header__inner__icon" />
          <input type="text" className="header__inner__search" />
          <Link to={CONSUMERPAGE} className="header__inner__consumer">
            Consumer Electronics
          </Link>
          <div className="header__inner__rightLine">
            <Link to={SIGNINPAGE} className="header__inner__rightLine__btn">
              Sign in
            </Link>
            <Link to={MYCARTPAGE} className="header__inner__rightLine__btn">
              My Cart
            </Link>
            <img src={userPhoto} alt="user" />
          </div>
        </div>
      </div>
    </header>
  );
}
