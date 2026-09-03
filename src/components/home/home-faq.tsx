import { faqs } from "@/lib/company";
import { FaqAccordion } from "@/components/sections/faq-accordion";

export function HomeFaq() {
  return (
    <FaqAccordion
      eyebrow="FAQ"
      heading="Cognito Tech Media: your questions, answered"
      items={faqs}
      muted
    />
  );
}
