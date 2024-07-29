import { useState } from "react";
import cn from "classnames";
import { tourCards } from "../data";
import TourCard from "../TourCard";
import { tourTabs } from "@/constants";
import s from "./TourList.module.scss";

function TourList() {
  const [activeTab, setActiveTab] = useState(tourTabs[0]);

  return (
    <>
      <ul className={cn("list", s.tabs)}>
        {tourTabs.map((tab) => (
          <li key={tab}>
            <button
              className={cn(s.tabsBtn, "text_big", {
                [s.tabsBtnActive]: activeTab === tab,
              })}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
      <div className={s.cardsContainer}>
        {tourCards.map((card) => (
          <TourCard
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            bgImage={card.bgImage}
          />
        ))}
      </div>
    </>
  );
}

export default TourList;
