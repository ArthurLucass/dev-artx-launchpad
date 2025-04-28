
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Portfolio Websites",
    description: "Personal or Professional portfolios, beautifully crafted.",
    icon: "💼",
    popular: false,
  },
  {
    title: "Landing Pages",
    description: "High-converting pages that sell your products/services.",
    icon: "🚀",
    popular: true,
  },
  {
    title: "Sales Pages",
    description: "Full-fledged pages optimized for maximum revenue.",
    icon: "💰",
    popular: false,
  },
  {
    title: "Link Pages",
    description: "Perfect for Instagram, TikTok, and digital business cards.",
    icon: "🔗",
    popular: false,
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding" id="services">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center">Services We Offer</h2>
        <p className="section-subtitle text-center">
          Professional web solutions tailored to your specific needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <Card key={index} className={`card-hover ${service.popular ? 'border-brand-blue border-2' : 'border border-gray-100'}`}>
              <CardHeader className={`pb-2 ${service.popular ? 'pt-2' : 'pt-6'}`}>
                {service.popular && (
                  <div className="w-full -mt-2 mb-2">
                    <span className="bg-gradient-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full btn-primary mt-4">
                  <a href="#contact">Learn More</a>
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
