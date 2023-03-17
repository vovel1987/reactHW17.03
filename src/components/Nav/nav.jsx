import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";
import NavIconsLinks from "../NavIconsLinks";
import { RiPagesLine } from "react-icons/ri";
// import { FaFacebookF } from "react-icons/fa";
// import { ImTwitter } from "react-icons/im";
// import { BsInstagram } from "react-icons/bs";

export default function Nav() {
  const links = [
    { id: 1, label: "Home", to: "/" },
    { id: 2, label: "Author", to: "/author" },
    { id: 3, label: "Companies", to: "/companies" },
    { id: 4, label: "Articles", to: "/articles" },
  ];

  const checkAction = ({ isActive }) => (isActive ? s.active : "");
  return (
    <nav className={s.nav}>
      <div className={s.pages_block1}>
        <div className={s.pages}>
          <RiPagesLine className={s.block} />

          <h2 className={s.text}>Pages</h2>
        </div>
        <NavIconsLinks />
      </div>
      <div className={s.pages_block2}>
        <div className={s.link_block}>
          {links.map(({ id, label, to }) => (
            <NavLink className={checkAction} key={id} to={to}>
              {label}
            </NavLink>
          ))}
        </div>
        <div className={s.order_block}>
          <button>Order Today</button>
        </div>
      </div>
    </nav>
  );
}
