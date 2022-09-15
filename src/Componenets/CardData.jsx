import React from "react";
import Styles from "./CardData.module.css";

const CardData = ({ daysdata }) => {
  const {
    card_body,
    card_color,
    card_header,
    card_image,
    day_of_the_week,
    day_of_the_month,
  } = daysdata;

  return (
    <div className={Styles.calandercard}>
      <div className={card_image ? Styles.div1 : Styles.semidiv1}>
        <h3>{day_of_the_week.toUpperCase()}</h3>
        <h1>{day_of_the_month}</h1>
      </div>
      <div
        className={card_image ? Styles.div2 : Styles.semidiv2}
        Style={card_color}>
        <h2>{card_header}</h2>
        <p>{card_body}</p>
        <button Style={card_color}>Schedule Post</button>
      </div>
      <div className={Styles.div3}>
        <img src={card_image} alt="" />
      </div>
    </div>
  );
};

export default CardData;

