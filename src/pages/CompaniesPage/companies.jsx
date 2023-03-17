import React from "react";
import { useSelector } from "react-redux";
import Companies from "../../components/Companies";
import s from "./style.module.css";

export default function PrintCompanies() {
  const companies = useSelector((state) => state.companies);
  return (
    <div className={s.container}>
      <div className={s.block_1}>
        <h1 className={s.title}>Trusted by The Best</h1>
        <div className={s.line}></div>
        <div className={s.block_companies}>
          {companies.map((elem) => (
            <Companies key={elem.id} {...elem} />
          ))}
        </div>
      </div>
      <div className={s.block_2}>
        <div>
          <p  className={s.text}>Get Book Copy Today!</p>
          <div className={s.line_2}></div>
          <p className={s.descr}>
            We believe that bookstores are essential to a healthy culture.
            They're where authors can connect with readers
          </p>
        </div>
        <img   className={s.image} src="/images/image5.png" alt="" />
      </div>
    </div>
  );
}
