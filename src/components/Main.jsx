import React from "react";
import { userName, mainDesc, aboutDesc } from "../user/user";

const Main = () => {
  return (
    <div className="container main">
      <div className="main-desc">
        <span className="roboto-mono-family">{`Hi! I'm ${userName}.`}</span>
        <span className="roboto-mono-family">{`<${mainDesc}/>`}</span>
      </div>
      <div className="about-desc">
        <i className="fas fa-quote-left"></i>
        <span className="about-desc-detail">{aboutDesc}</span>
      </div>
    </div>
  );
};

export default Main;
