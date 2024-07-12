import Section from "@/components/commons/Section";
import CreateTourForm from "./CreateTourForm";

function CreateTourSection() {
  return (
    <Section
      id="create-tour"
      title="Собери свой тур"
      subtitle="Идейные соображения высшего порядка, а также рамки и место обучения
        кадров"
    >
      <CreateTourForm />
    </Section>
  );
}

export default CreateTourSection;
