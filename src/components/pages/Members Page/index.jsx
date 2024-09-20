import React from "react";
import "./index.css";
import BretHart from "/Wrestlers/BretHart-Transperant.bmp";
import OwenHart from "/Wrestlers/OwenHart-Transparent.webp";
import NeidHart from "/Wrestlers/JimNeidHart-Transperant.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Wrestler from "../../Wrestlers";

export default function Members() {
  const [active, setActive] = useState(1);
  const [display, setDisplay] = useState(false);

  function toggleTab(index) {
    setActive(index);
  }

  return (
    <main className="container flex-container flow flex">
      <div class="tab-list underline-indicators flex">
          <Link
            aria-selected="true"
            class="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
          >
            Bret Hart
          </Link>
          <Link
            aria-selected="false"
            class="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
          >
            Owen Hart
          </Link>
          <Link
            aria-selected="false"
            class="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
          >
            Jim Neidhart
          </Link>
        </div>

      <Wrestler mainImage={BretHart} name="Bret Hart" nickname="The Hitman"/>
      <Wrestler mainImage={OwenHart} name="Owen Hart" nickname="The King of Harts"/>
      <Wrestler mainImage={NeidHart} name="Jim Neidhart" nickname="The Anvil"/>
      
    </main>
  );
}
