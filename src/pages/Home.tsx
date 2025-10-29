import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Palette, Award, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

const Home = () => {
  const featuredServices = [
    { name: "Fade Cut", icon: Scissors, description: "Precision fades and modern cuts" },
    { name: "Hot Towel Shave", icon: Sparkles, description: "Traditional grooming experience" },
    { name: "Hair Colouring", icon: Palette, description: "Expert color treatments" },
    { name: "Beard Trim", icon: Award, description: "Professional beard styling" },
    { name: "Groom Packages", icon: Users, description: "Complete grooming solutions" },
    { name: "Waxing", icon: Clock, description: "Smooth and professional results" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        
        <div className="relative z-10 text-center text-primary-foreground px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-4 sm:mb-6 animate-fade-in tracking-wide">
            Enable Cutz Barbers Salon
          </h1>
          <p className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-95">
            Premium Grooming & Styling in Smethwick
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-montserrat font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 min-h-[48px] shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
            asChild
          >
            <a href="https://calendly.com/addaebediako7/new-meeting" target="_blank" rel="noopener noreferrer">
              Book Your Appointment Now
            </a>
          </Button>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 sm:mb-4 tracking-wide">
              Our Popular Services
            </h2>
            <p className="font-open-sans text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Experience premium grooming with our expert barbers and stylists
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-12">
            {featuredServices.map((service) => (
              <Card key={service.name} className="border-border hover:border-accent transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-5 sm:p-6 md:p-7">
                  <service.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-accent mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bebas text-xl sm:text-2xl md:text-3xl mb-2 text-foreground tracking-wide">
                    {service.name}
                  </h3>
                  <p className="font-open-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center px-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-montserrat font-semibold min-h-[48px] w-full sm:w-auto"
              asChild
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 tracking-wide">
            Ready for a Fresh Look?
          </h2>
          <p className="font-open-sans text-base sm:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Book your appointment today and experience the Enable Cutz difference
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-montserrat font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 min-h-[48px] shadow-xl w-full sm:w-auto"
            asChild
          >
            <a href="https://calendly.com/addaebediako7/new-meeting" target="_blank" rel="noopener noreferrer">
              Book Online Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
