import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    "Beard Conditioning",
    "Beard Dyeing",
    "Beard Maintenance",
    "Beard Trim",
    "Box Braids",
    "Braids",
    "Buzz Cut",
    "Capillary Hair Treatment",
    "Comb Twist",
    "Cornrows",
    "Curly Hair",
    "Custom Cut",
    "Eyebrow Tinting",
    "Eyebrow Trimming",
    "Fade Cut",
    "Groom Packages",
    "Hair Colouring",
    "Hair Extensions",
    "Hair Shape-Up",
    "Hair Straightening",
    "Hairstyling",
    "Head Shave",
    "Hot Towel Shave",
    "Children's Cuts",
    "Long Haircut",
    "Male Body Hair Removal",
    "Men's Manicures",
    "Military Haircut",
    "Perms",
    "Razor Cut",
    "Scalp Treatment",
    "Scissor Cut",
    "Shampoo & Conditioning",
    "Shave",
    "Straight Razor Shave",
    "Wash and Blowdry",
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-foreground mb-6">
            Our Services
          </h1>
          <p className="font-open-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            From classic cuts to modern styling, we offer comprehensive grooming and salon services 
            to keep you looking sharp and feeling confident.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <Card 
              key={service} 
              className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group cursor-default"
            >
              <CardContent className="p-6 text-center">
                <h3 className="font-poppins font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                  {service}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-card p-12 rounded-lg border border-border">
          <h2 className="font-poppins font-bold text-3xl text-foreground mb-4">
            Ready to Book?
          </h2>
          <p className="font-open-sans text-muted-foreground mb-6">
            Schedule your appointment today and experience premium grooming
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins font-semibold"
            asChild
          >
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Book a Service
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
