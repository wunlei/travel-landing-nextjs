import { useContext, useState } from "react";
import cn from "classnames";
import { tourCards } from "../data";
import TourCard from "../TourCard";
import { AppContext } from "@/data";
import s from "./TourList.module.scss";

function TourList() {
  const { tours } = useContext(AppContext).selectTourSection;
  const [activeTab, setActiveTab] = useState(tours[0]);

  return (
    <>
      <ul className={cn("list", s.tabs)}>
        {tours.map((tab) => (
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
