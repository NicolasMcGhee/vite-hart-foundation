import React from "react";
import "./index.css";

export default function Wrestler(props) {
  return (
    <div className="flex flex-centered">
      {/* LEFT */}
      <div className="centerpiece flex">
        <img src={props.mainImage} alt={props.alt} width={600} className="mainImage" />
        <blockquote>
          {" "}
          <p className="fs-400">
            "I'm the best there is, the best there was, and the best there ever
            will be."
          </p>
        </blockquote>
      </div>
      {/* RIGHT */}
      <section className="infomatic">
        {/* Infomatic */}
        <article className="wrestler-info">
          <h1 className="numbered-title centered">{props.nickname}</h1>
          <h2 className="fs-800 uppercase ff-serif">{props.name}</h2>
          {/* props.summary */}
          <p>
            {props.summary}
          </p>
          <div className="destination-meta flex">
            {/* props.info1 */}
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="fs-500 ff-serif uppercase">384,400 km</p>
            </div>
            {/* props.info2 */}
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="fs-500 ff-serif uppercase">3 days</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
