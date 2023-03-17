import React from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";

export default function footerAddress({ address, mail, phone }) {
  return (
    <div>
      <ul className={s.ul_block}>
        <li className={s.li_1}>Address :</li>
        <li className={s.li_2}>{address}</li>
      </ul>
      <ul className={s.ul_block}>
        <li className={s.li_1}>Mail :</li>
        <li className={s.li_2}>{mail}</li>
      </ul>
      <ul className={s.ul_block}>
        <li className={s.li_1}>Phone :</li>
        <li className={s.li_2}>{phone}</li>
      </ul>
    </div>
  );
}
