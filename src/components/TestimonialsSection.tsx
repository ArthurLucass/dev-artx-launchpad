
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Dev Artx transformed my online presence. I got a stunning portfolio and landed two clients in the first month!",
    author: "Sarah M.",
    role: "Photographer",
  },
  {
    quote: "I needed a sales page urgently. They delivered in 5 days and I tripled my revenue!",
    author: "Jake T.",
    role: "Entrepreneur",
  },
  {
    quote: "Finally found a team that understands minimalism and impact. 10/10 work.",
    author: "Amanda R.",
    role: "Influencer",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding" id="testimonials">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center">Testimonials</h2>
        <p className="section-subtitle text-center">
          Don't take our word for it - hear what our clients have to say
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="text-3xl mb-6 text-brand-blue">"</div>
                <p className="mb-6 text-lg italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
