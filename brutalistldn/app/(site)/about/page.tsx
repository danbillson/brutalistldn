import { Section } from "@/components/Section";
import { Prose } from "@/components/Prose";

export default function AboutPage() {
  return (
    <Section kicker="About" title="Mission & Credits">
      <Prose>
        <p>brutalistldn indexes notable Brutalist architecture across London. We prioritise civic importance, architectural quality, and documentary photography.</p>
        <p>Submit suggestions, corrections, or photo credits via the Submit page.</p>
      </Prose>
    </Section>
  );
}