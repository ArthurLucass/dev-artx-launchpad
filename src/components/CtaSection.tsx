
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="section-padding bg-gradient-primary text-white" id="contact">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="section-title text-white text-center">Ready to Launch Your Dream Site?</h2>
        <p className="text-xl md:text-2xl mb-12 text-white/90">
          Let's build something amazing together that helps your business grow
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="btn-primary bg-white text-brand-blue hover:bg-white/90 text-lg">
            <a href="#contact-form">🚀 Start Your Project →</a>
          </Button>
          <Button asChild variant="outline" className="btn-secondary border-white text-white hover:bg-white/10 text-lg">
            <a href="#contact-form">📅 Book a Call →</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
