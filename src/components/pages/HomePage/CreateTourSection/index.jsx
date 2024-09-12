import { useContext } from "react";
import { AppContext } from "@/data";
import Section from "@/components/commons/Section";
import CreateTourForm from "./CreateTourForm";

function CreateTourSection() {
  const { title, subtitle } = useContext(AppContext).createTourSection;
  return (
    <Section id="create-tour" title={title} subtitle={subtitle}>
      <CreateTourForm />
    </Section>
  );
}

export default CreateTourSection;
