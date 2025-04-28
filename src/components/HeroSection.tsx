import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
const HeroSection = () => {
  const {
    translations
  } = useLanguage();
  return <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 right-[-10%] w-64 h-64 md:w-96 md:h-96 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-[-10%] w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {translations.hero.title} <br />
              <span className="gradient-text">Dev Artx</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              {translations.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary text-lg">
                <a href="#contact">
                  {translations.hero.getStarted}
                </a>
              </Button>
              <Button variant="outline" asChild className="btn-secondary text-lg">
                <a href="#portfolio" className="display: \"none\"">
                  {translations.hero.seeWork}
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative z-10 animate-float">
            <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Web Design Illustration" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-bg rounded-2xl -z-10 opacity-80 blur-md"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;