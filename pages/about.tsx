import React from "react";
import Nav from "../src/component/Nav";

const about = () => {
  return (
    <div className="bg-red-200 mt-40 ml-10 flex ">
      <Nav />
      <div className="prose">
        <h1>Hi, I am Wayne (何煒賢)</h1>
        <p>
          Originally from Guang Zhou, China. Currently I am a architecture
          graduate at Architectus, Sydney, mostly working on commercial, public
          infrastructure, residential sectors.
        </p>
        <p>
          Prior to my professional practice, I completed my master of
          architecture at University of New South Wales (UNSW) in Sydney,
          specialized in high performance architecture stream, bachelor of
          architectural design in RMIT, Melbourne.
        </p>
      </div>
    </div>
  );
};

export default about;
