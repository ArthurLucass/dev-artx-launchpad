
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const CtaSection = () => {
  const { translations } = useLanguage();
  
  return (
    <section className="section-padding bg-gradient-primary text-white" id="contact">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="section-title text-white text-center">{translations.cta.title}</h2>
        <p className="text-xl md:text-2xl mb-12 text-white/90">
          {translations.cta.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="btn-primary bg-white text-brand-blue hover:bg-white/90 text-lg">
            <a href="#contact-form">{translations.cta.startProject}</a>
          </Button>
          <Button asChild variant="outline" className="btn-secondary border-white text-white hover:bg-white/10 text-lg">
            <a href="#contact-form">{translations.cta.bookCall}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
