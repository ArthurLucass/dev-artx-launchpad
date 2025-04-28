
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Vision",
    description: "Brief us with your project goals.",
  },
  {
    number: "02",
    title: "We Create",
    description: "Custom design and develop your page.",
  },
  {
    number: "03",
    title: "Launch & Celebrate",
    description: "You go live with a stunning new site!",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-gradient-primary text-white" id="process">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-white text-center">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold opacity-20 absolute -top-10 left-0">{step.number}</div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/80 text-lg">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 -right-6 transform">
                  <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z" fill="white"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild className="btn-secondary bg-white text-brand-blue hover:bg-white/90">
            <a href="#contact">Start My Project →</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
