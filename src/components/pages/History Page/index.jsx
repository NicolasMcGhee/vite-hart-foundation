import React, { useState } from "react";
import HartFoundation from "/Pictures/HartFoundation.bmp";
import HartStart from "/Pictures/HartStartWithHart.bmp";
import Natalya from "/Wrestlers/NatalyaNeidhart-Transperant.bmp";
import TysonKidd from "/Wrestlers/TysonKiddChilling.bmp";
import "./index.css";
import Honorary from "../../Honorary";

export default function History() {
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(1);

  function toggleTab(index) {
    setToggle(index);
  }

  function toggleActive() {
    setActive((active) => !active);
  }

  return (
    <div className="container ff-sans-norm letter-spacing-3 history-text">
      <div className={`${toggle === 1 ? "active history-desc" : "not-active"}`}>
        <img src={HartStart} />
        <div>
          <h4>Hart Start With Jimmy Hart (No Relation)</h4>
        </div>
        
        <h1>80s: FORMATION</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit non
          architecto quis, ex quia repellendus, suscipit at modi ad iusto maxime
          quam itaque velit obcaecati sunt vitae! Quo sit vitae nam nobis
          aliquid ad dolorem voluptates est, possimus, perspiciatis, blanditiis
          quae id autem quos! Maxime qui dolores earum eveniet ea!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit non
          architecto quis, ex quia repellendus, suscipit at modi ad iusto maxime
          quam itaque velit obcaecati sunt vitae! Quo sit vitae nam nobis
          aliquid ad dolorem voluptates est, possimus, perspiciatis, blanditiis
          quae id autem quos! Maxime qui dolores earum eveniet ea!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit non
          architecto quis, ex quia repellendus, suscipit at modi ad iusto maxime
          quam itaque velit obcaecati sunt vitae! Quo sit vitae nam nobis
          aliquid ad dolorem voluptates est, possimus, perspiciatis, blanditiis
          quae id autem quos! Maxime qui dolores earum eveniet ea!
        </p>
      </div>

      <div
        className={`${
          toggle === 2 ? "active history-desc" : "not-active"
        }`}
      >
        {/* Add Alt props for images */}
        <img src={HartFoundation} />
        <h4>From Left to Right: Davey, Owen, Bret, Jim</h4>
        <h1 >90s: ATTITUDE ERA</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit non
          architecto quis, ex quia repellendus, suscipit at modi ad iusto maxime
          quam itaque velit obcaecati sunt vitae! Quo sit vitae nam nobis
          aliquid ad dolorem voluptates est, possimus, perspiciatis, blanditiis
          quae id autem quos! Maxime qui dolores earum eveniet ea!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit non
          architecto quis, ex quia repellendus, suscipit at modi ad iusto maxime
          quam itaque velit obcaecati sunt vitae! Quo sit vitae nam nobis
          aliquid ad dolorem voluptates est, possimus, perspiciatis, blanditiis
          quae id autem quos! Maxime qui dolores earum eveniet ea!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit non
          architecto quis, ex quia repellendus, suscipit at modi ad iusto maxime
          quam itaque velit obcaecati sunt vitae! Quo sit vitae nam nobis
          aliquid ad dolorem voluptates est, possimus, perspiciatis, blanditiis
          quae id autem quos! Maxime qui dolores earum eveniet ea!
        </p>
      </div>

      <div
        className={`${
          toggle === 3 ? "active history-desc" : "not-active"
        }`}
      >
        <img src={HartFoundation} />
        <h1>2000s: RETIREMENT</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit non
          architecto quis, ex quia repellendus, suscipit at modi ad iusto maxime
          quam itaque velit obcaecati sunt vitae! Quo sit vitae nam nobis
          aliquid ad dolorem voluptates est, possimus, perspiciatis, blanditiis
          quae id autem quos! Maxime qui dolores earum eveniet ea!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit non
          architecto quis, ex quia repellendus, suscipit at modi ad iusto maxime
          quam itaque velit obcaecati sunt vitae! Quo sit vitae nam nobis
          aliquid ad dolorem voluptates est, possimus, perspiciatis, blanditiis
          quae id autem quos! Maxime qui dolores earum eveniet ea!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit non
          architecto quis, ex quia repellendus, suscipit at modi ad iusto maxime
          quam itaque velit obcaecati sunt vitae! Quo sit vitae nam nobis
          aliquid ad dolorem voluptates est, possimus, perspiciatis, blanditiis
          quae id autem quos! Maxime qui dolores earum eveniet ea!
        </p>
      </div>
      <div
        className={`${
          toggle === 4 ? "active history-desc uppercase" : "not-active"
        }`}
      >
        <Honorary
          mainImage={Natalya}
          nickname="Nattie"
          name="Natalya Neidhart"
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab quod natus praesentium minima quae, itaque, suscipit exercitationem nobis ipsum laborum culpa odit? Possimus odio, accusamus numquam dolor rem quos dolorum soluta fugit exercitationem qui? Ratione voluptate eaque cumque laboriosam facilis, modi asperiores, nemo natus fuga totam tempora doloribus commodi!"
        />
        <Honorary
          mainImage={TysonKidd}
          nickname="El Local #2"
          name="Tyson Kidd"
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab quod natus praesentium minima quae, itaque, suscipit exercitationem nobis ipsum laborum culpa odit? Possimus odio, accusamus numquam dolor rem quos dolorum soluta fugit exercitationem qui? Ratione voluptate eaque cumque laboriosam facilis, modi asperiores, nemo natus fuga totam tempora doloribus commodi!"
        />
      </div>
      <div className="dot-indicators flex dots">
        <button onClick={() => toggleTab(1)}></button>
        <button onClick={() => toggleTab(2)}></button>
        <button onClick={() => toggleTab(3)}></button>
        <button onClick={() => toggleTab(4)}></button>
      </div>
    </div>
  );
}
