import React from "react";
import NavIconsLinks from "../NavIconsLinks";
import s from "./style.module.css";
import { RiPagesLine } from "react-icons/ri";
import FooterIcons from "../FooterIcon";
import { NavLink } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";
import FooterAddress from "../FooterAddress";
import { useSelector } from "react-redux";

export default function Footer() {
  const links = [
    { id: 1, label: "Home", to: "/" },
    { id: 2, label: "About", to: "/about" },
    { id: 3, label: "Articles", to: "/articles" },
    { id: 4, label: "Our Store", to: "/store" },
    { id: 5, label: "Contact Us", to: "/contact" },
  ];

  const data = useSelector((state) => state.explore);
  return (
    <div className={s.container}>
      <div className={s.container_icons}>
        <div className={s.block_icons}>
          <div className={s.pages}>
            <RiPagesLine className={s.block} />

            <h2 className={s.text}>Pages</h2>
          </div>
          <FooterIcons />
        </div>
      </div>

      <div className={s.links_block}>
        <p className={s.explore}>Explore</p>

        {links.map((elem) => (
          <ul className={s.ul_block} key={elem.id}>
            <li>
              <FiMoreHorizontal className={s.icon} />
            </li>
            <li>
              <NavLink key={elem.id} to={elem.to}>
                {elem.label}
              </NavLink>
            </li>
          </ul>
        ))}
      </div>
      <div className={s.adr_block}>
        <p className={s.keep}>Keep in Touch</p>
        {data.map((elem) => (
          <FooterAddress key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
}
