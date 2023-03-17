import React from "react";
import { useSelector } from "react-redux";
import s from "./style.module.css";
import{TbPointFilled} from 'react-icons/tb'

export default function Aithor({ id, title, price, descr, print, image }) {
  console.log(image);
  return (
    <div className={s.container}>
      <img className={s.image} src={image} alt="" />
      <div className={s.block}>
        <p className={s.title}>{title}</p>
        <p className={s.price}>{price}</p>
        <p className={s.descr}>{descr}</p>
        <div className={s.block_point}>
        <TbPointFilled className={s.point}/>
        <p className={s.prinT}>{print}</p>
        </div>
      </div>
    </div>
  );
}
