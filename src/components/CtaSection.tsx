
import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "./ContactForm";

const CtaSection = () => {
  const { translations } = useLanguage();
  
  return (
    <section className="section-padding bg-gradient-primary text-white" id="contact">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">{translations.cta.title}</h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            {translations.cta.subtitle}
          </p>
        </div>
        
        <div id="contact-form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
