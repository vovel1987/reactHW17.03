import React from "react";
import { RiPagesLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import s from "./style.module.css";

export default function index() {
  return (
    <div>
      {/* <div className={s.pages}>
        <RiPagesLine className={s.block} />

        <h2 className={s.text}>Pages</h2>
      </div> */}
      <div className={s.icon_block}>
        <a className={s.icon} href="https://www.facebook.com/">
          <FaFacebookF />
        </a>
        <a className={s.icon} href="https://twitter.com/">
          <ImTwitter />
        </a>
        <a className={s.icon} href="https://www.instagram.com/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
}
