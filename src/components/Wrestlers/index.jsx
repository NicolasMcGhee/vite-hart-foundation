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
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="fs-500 ff-serif uppercase">384,400 km</p>
            </div>

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
