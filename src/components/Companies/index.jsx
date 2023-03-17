import React from "react";
import s from './style.module.css'

export default function Companies({ image, name, descr }) {
  return (
    <div className={s.block}>
      <img className={s.image} src={image} alt="" />
      <p className={s.title}>{name}</p>
      <p className={s.descr}>{descr}</p>
    </div>
  );
}
