import React from "react";
import Classes from "./card-list.module.css";

const CardList = props => {
  return <div className={Classes.cardlist}>{props.children}</div>;
};

export default CardList;
