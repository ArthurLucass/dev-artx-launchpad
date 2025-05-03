
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FaqSection = () => {
  const { translations } = useLanguage();
  const faqs = translations.faq.items;

  return (
    <section className="section-padding bg-[#1a0e0e]" id="faq">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title text-center font-anton uppercase tracking-wider">{translations.faq.title}</h2>
        
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-brand-text/10">
              <AccordionTrigger className="text-lg font-anton uppercase tracking-wide text-brand-text">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-brand-text/80">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
