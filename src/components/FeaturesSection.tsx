
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "🎨",
    title: "Modern, Custom Designs",
    description: "Tailored websites that impress and convert.",
  },
  {
    icon: "⚡",
    title: "Lightning Fast Delivery",
    description: "We launch projects in record time.",
  },
  {
    icon: "📈",
    title: "Optimized for Conversions",
    description: "Designed to turn visitors into customers.",
  },
  {
    icon: "🔗",
    title: "Link Pages for Personal Brands",
    description: "Perfect for influencers, entrepreneurs, and creators.",
  },
  {
    icon: "🛠️",
    title: "Full Setup Support",
    description: "From concept to launch — we handle it all.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-gray-50" id="features">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center">Why Choose Dev Artx?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border border-gray-100">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
