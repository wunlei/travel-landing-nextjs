import { useContext } from "react";
import { AppContext } from "@/data";
import Section from "@/components/commons/Section";
import TourList from "./TourList";

function SelectTourSection() {
  const { title } = useContext(AppContext).selectTourSection;
  return (
    <Section id="tours" title={title}>
      <TourList />
    </Section>
  );
}

export default SelectTourSection;
