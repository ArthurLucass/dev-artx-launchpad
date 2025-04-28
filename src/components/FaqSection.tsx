
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
    <section className="section-padding bg-gray-50" id="faq">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title text-center">{translations.faq.title}</h2>
        
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
