import React from "react";
import s from "./style.module.css";

export default function Home() {
  return (
    <div className={s.container}>
      <div className={s.block_descr}>
        <div>
          <div className={s.block_line}>
            <div className={s.line}></div>
            <h3 className={s.welcome}>Welcome To Pages!!!</h3>
          </div>
          <h1 className={s.title}>Your Books From</h1>
          <h1 className={s.title}>The Best Writer.</h1>
          <p className={s.descr}>
            We believe that reading books are essential to a healthy culture.
          </p>
          <p className={s.descr}>
            They're where authors can connect with readers
          </p>
        </div>
        <div className={s.links}>
          <button className={s.button}>Order Today</button>
          <a className={s.link} href="https://www.thalia.de/">
            Read Free Demo
          </a>
        </div>
        <div className={s.list}>
          <ul>
            <li className={s.li_1}>Pages :</li>
            <li className={s.li_2}>250 pages</li>
          </ul>
          <ul>
            <li className={s.li_1}>Lenght :</li>
            <li className={s.li_2}>10 Hours</li>
          </ul>
          <ul>
            <li className={s.li_1}>Rating :</li>
            <li className={s.li_2}>4.5/5(305 ratings)</li>
          </ul>
        </div>
      </div>
      <div className={s.block_img}>
        <img
          className={s.image}
          src='/images/lamp.png'
          alt=""
        />
      </div>
    </div>
  );
}
