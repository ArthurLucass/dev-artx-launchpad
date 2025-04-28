
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to complete a project?",
    answer: "Most projects are delivered in 7 days or less. The exact timeline depends on the scope and complexity of your project. We'll provide you with a precise timeline during our initial consultation.",
  },
  {
    question: "Can you help with domain and hosting?",
    answer: "Yes! We offer complete setup assistance. We can help you choose the right domain name, set up hosting, and configure everything so your site is ready to go. We aim to make the entire process as seamless as possible.",
  },
  {
    question: "What if I need updates later?",
    answer: "We offer affordable maintenance plans to keep your site updated and running smoothly. Whether you need small content updates or more substantial feature additions, we're here to help your site grow with your business.",
  },
  {
    question: "Do you provide website maintenance?",
    answer: "Yes, we offer various maintenance packages to keep your website updated, secure, and running optimally. Our maintenance services include regular updates, backups, security checks, and performance optimization.",
  },
  {
    question: "Can I update content on my own?",
    answer: "Absolutely! We build all our sites with user-friendly content management systems that allow you to make basic updates yourself. We also provide a complimentary mini-course on managing your site with every project.",
  },
];

const FaqSection = () => {
  return (
    <section className="section-padding bg-gray-50" id="faq">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        
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
