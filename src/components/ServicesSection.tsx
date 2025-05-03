
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { translations } = useLanguage();
  const services = translations.services.items;
  
  return (
    <section className="section-padding bg-brand-background" id="services">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center">{translations.services.title}</h2>
        <p className="section-subtitle text-center">
          {translations.services.subtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <Card key={index} className={`card-hover bg-[#1a0e0e] ${service.popular ? 'border-brand-text/50 border-2' : 'border border-brand-text/10'}`}>
              <CardHeader className={`pb-2 ${service.popular ? 'pt-2' : 'pt-6'}`}>
                {service.popular && (
                  <div className="w-full -mt-2 mb-2 my-0">
                    <span className="bg-brand-text text-brand-background text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-anton uppercase tracking-wide text-brand-text">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <CardDescription className="text-brand-text/80">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-brand-text text-brand-background hover:bg-brand-text/90 mt-4 rounded-full">
                  <a href="#contact">{translations.header.getStarted}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
