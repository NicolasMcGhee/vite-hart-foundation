import React from 'react'
import './index.css'


export default function Honorary(props) {
    return (
        <div className="flex flex-centered">
          {/* LEFT */}
          <div className="centerpiece flex">
            <img src={props.mainImage} alt={props.alt} width={600} className="mainImage" />
          </div>
          {/* RIGHT */}
          <section className="infomatic">
            {/* Infomatic */}
            <article className="wrestler-info">
              <h1 className="numbered-title centered">{props.nickname}</h1>
              <h2 className="fs-800 uppercase ff-serif hononary-name">{props.name}</h2>
              <p>
                {props.summary}
              </p>
            </article>
          </section>
        </div>
      );
}
