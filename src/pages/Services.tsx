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
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 sm:mb-6 tracking-wide">
            Our Services
          </h1>
          <p className="font-open-sans text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            From classic cuts to modern styling, we offer comprehensive grooming and salon services 
            to keep you looking sharp and feeling confident.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {services.map((service) => (
            <Card 
              key={service} 
              className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group cursor-default"
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <h3 className="font-bebas text-lg sm:text-xl text-foreground group-hover:text-accent transition-colors tracking-wide">
                  {service}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-card p-6 sm:p-8 lg:p-12 rounded-lg border border-border">
          <h2 className="font-bebas text-3xl sm:text-4xl text-foreground mb-3 sm:mb-4 tracking-wide">
            Ready to Book?
          </h2>
          <p className="font-open-sans text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
            Schedule your appointment today and experience premium grooming
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-montserrat font-semibold min-h-[48px] w-full sm:w-auto"
            asChild
          >
            <a href="https://calendly.com/addaebediako7/new-meeting" target="_blank" rel="noopener noreferrer">
              Book a Service
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
