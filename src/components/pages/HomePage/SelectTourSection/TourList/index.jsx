import { useState } from "react";
import cn from "classnames";
import { tourCards } from "../data";
import TourCard from "../TourCard";
import styles from "./TourList.module.scss";

const tourTabs = [
  "Популярные",
  "Авторские",
  "Походы",
  "Сплавы",
  "Велопрогулки",
];

function TourList() {
  const [activeTab, setActiveTab] = useState(tourTabs[0]);

  return (
    <>
      <ul className={cn("list", styles["tour-tabs"])}>
        {tourTabs.map((tab) => (
          <li key={tab}>
            <button
              className={cn(styles["tour-tabs__btn"], "text_big", {
                [styles["tour-tabs__btn_active"]]: activeTab === tab,
              })}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles["tour-cards"]}>
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
