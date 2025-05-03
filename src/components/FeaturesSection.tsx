
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
  const { translations } = useLanguage();
  const features = translations.features.items;

  return (
    <section className="section-padding bg-[#0056c7]" id="features">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center">{translations.features.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border border-brand-text/10 bg-[#00388c]">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-anton uppercase tracking-wider mb-2 text-brand-text">{feature.title}</h3>
                <p className="text-brand-text/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
