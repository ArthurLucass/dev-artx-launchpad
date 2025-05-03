
import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "./ContactForm";

const CtaSection = () => {
  const { translations } = useLanguage();
  
  return (
    <section className="section-padding bg-gradient-to-b from-[#0056c7] to-[#004aad] text-brand-text" id="contact">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title text-brand-text font-anton uppercase tracking-wider">{translations.cta.title}</h2>
          <p className="text-xl md:text-2xl mb-8 text-brand-text/90 max-w-2xl mx-auto">
            {translations.cta.subtitle}
          </p>
        </div>
        
        <div id="contact-form" className="relative z-10">
          <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full -z-10 transform translate-y-1/2"></div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
