import React from "react";
import { useSelector } from "react-redux";
import Author from "../../components/Author";
import s from "./style.module.css";
import{BsQrCode} from 'react-icons/bs'

export default function AuthorPage() {
  const books = useSelector((state) => state.books);
  return (
    <div className={s.container}>
      <h1 className={s.text}>The Author's Book</h1>
      <div className={s.line}></div>
      <div className={s.block_1}>
        {books.map((elem) => (
          <Author key={elem.id} {...elem} />
        ))}
      </div>
      <div className={s.block_2}>
        <div className={s.author_block}>
          <img className={s.author} src="/images/author.png" alt="" />
        </div>

        <div className={s.block_3}>
          <p className={s.about}>About The Author</p>
          <div className={s.line}></div>
          <p className={s.descr}>
            We believe that bookstories are essential to a healthy culture.
            They're where authors can connect with readers, where we discover
            new writers, where children det hooked on the thrill of reading that
            can last a lifetime
          </p>

          <div className={s.ul_container}>
            <ul className={s.ul_block}>
              <li className={s.li_1}>02</li>
              <li className={s.li_2}>Books Published</li>
            </ul>
            <ul className={s.ul_block}>
              <li  className={s.li_1}>4.5</li>
              <li className={s.li_2}>User Reviews</li>
            </ul>
            <ul className={s.ul_block}>
              <li  className={s.li_1}>04</li>
              <li  className={s.li_2}>Best Seller Awards</li>
            </ul>
          </div>
          <div className={s.qr_block}>
            <BsQrCode className={s.qr_code} />
            <div>
              <p className={s.qr_name}>John Abraham, PH.d</p>
              <p className={s.qr_text}>Mail: johnabraham@gmail.com</p>
              <p className={s.qr_text}>Phone : (+2) 123 545 9000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
