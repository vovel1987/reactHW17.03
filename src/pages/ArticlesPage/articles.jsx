import React from "react";
import { useSelector } from "react-redux";
import s from "./style.module.css";
import ArticlesP from "../../components/ArticlesP";

export default function Articles() {
  const articles = useSelector((state) => state.articles);
  const data = [
    {
      id: 1,
      number: "01",
      text: "Use HDFS & Map Reduce for storing & analyzing data at scale.",
    },
    {
      id: 2,
      number: "02",
      text: "Consume streaming data using Spark Streaming, Flink and Storm.",
    },
    {
      id: 3,
      number: "03",
      text: "Choose an appropriate data storage technology for your application.",
    },
    {
      id: 4,
      number: "04",
      text: "Analyze nonrelational data using Hbase, Cassandra and MongoDB. ",
    },
  ];
  return (
    <div className={s.container}>
      <>
        <p className={s.title}>What Will You Learn</p>
        <div className={s.line}></div>
      </>
      <div className={s.block_1}>
        <div className={s.block_ul}>
          {data.map((elem) => (
            <ul className={s.ul_block} key={elem.id}>
              <div className={s.li_block}>
                <li className={s.li_num}>{elem.number}</li>
              </div>

              <li className={s.li_text}>{elem.text}</li>
            </ul>
          ))}
        </div>
        <div className={s.block_img}>
          <div className={s.rahmen}></div>
          <img className={s.image} src="/images/image6.png" alt="" />
        </div>
      </div>
      <div className={s.block_articles}>
        <p className={s.article_text}>Articles & Resources</p>
        <div className={s.line}></div>
        <div className={s.article_block}>
          {articles.map((elem) => (
            <ArticlesP key={elem.id} {...elem} />
          ))}
        </div>
      </div>
    </div>
  );
}
