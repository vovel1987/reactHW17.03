import React from "react";
import s from "./style.module.css";

export default function Articles({ image, title, descr, date }) {
  return (
    <div className={s.container}>
      <img src={image} alt="" />
      <div className={s.block}>
        <p className={s.title}>{title}</p>
        <p className={s.descr}>{descr}</p>
        <p className={s.date}>{date}</p>
      </div>
    </div>
  );
}
