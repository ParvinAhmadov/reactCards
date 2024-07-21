import React from "react";
import { cardDb } from "./static/mockdb.js";
import BaseCard from "./components/baseCard"; 
import styleBase from "./components/baseCard/card.module.scss";

const App = () => {
  return (
    <div className={styleBase.container}>
      {cardDb &&
        cardDb.map((card) => (
          <BaseCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            text={card.text}
          />
        ))}
    </div>
  );
};

export default App;
