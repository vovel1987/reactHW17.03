import React from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import FooterAddress from "../../components/FooterAddress";

export default function ContactPage() {
  const contact = useSelector((state) => state.explore);

  return (
    <div className={s.container}>
      <h1>Contacts</h1>
      <div className={s.text}>
        {contact.map((item) => (
          <FooterAddress key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
