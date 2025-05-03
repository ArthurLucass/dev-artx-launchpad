
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { translations } = useLanguage();
  const testimonials = translations.testimonials.items;

  return (
    <section className="section-padding bg-brand-background" id="testimonials">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center font-anton uppercase tracking-wider">{translations.testimonials.title}</h2>
        <p className="section-subtitle text-center">
          {translations.testimonials.subtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover bg-[#1a0e0e] border border-brand-text/10">
              <CardContent className="p-6">
                <div className="text-3xl mb-6 text-brand-text/70">"</div>
                <p className="mb-6 text-lg italic text-brand-text/90">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#241414] flex items-center justify-center text-brand-text font-bold border border-brand-text/20">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-brand-text">{testimonial.author}</p>
                    <p className="text-sm text-brand-text/70">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
