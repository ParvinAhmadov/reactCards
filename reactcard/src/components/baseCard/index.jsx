import React from "react";
import styleBase from "./card.module.scss";
const baseCard = ({ title, text, icon: Icon }) => {
  return (
    <div className={styleBase.card}>
      <div className={styleBase.card_icon}>
        <Icon size={40} />
      </div>
      <div className={styleBase.card_title}>
        <h2>{title}</h2>
      </div>
      <div className={styleBase.card_text}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default baseCard;
