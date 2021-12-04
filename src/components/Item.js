import React, { useState } from "react";
import { BsFilePersonFill } from "react-icons/bs";
import "./Item.scss";

const Item = ({ title }) => {
  const person = ["person A", "person B", "person C"];
  return (
    <div className="Item">
      <div className="title-box">
        <h1 className="title">{title}</h1>
      </div>
      <div className="profile-wrapper">
        {person.map((person) => {
          return (
            <div className="person">
              <BsFilePersonFill />
              <div>{person}</div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Item;
