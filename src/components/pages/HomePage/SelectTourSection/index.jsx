import Section from "@/components/commons/Section";
import TourList from "./TourList";

function SelectTourSection() {
  return (
    <Section id="tours" title="Выбери свой тур">
      <TourList />
    </Section>
  );
}

export default SelectTourSection;
