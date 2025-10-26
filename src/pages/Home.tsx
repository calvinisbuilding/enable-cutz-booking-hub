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
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
          <h1 className="font-poppins font-bold text-5xl md:text-7xl mb-6 animate-fade-in">
            Enable Cutz Barbers Salon
          </h1>
          <p className="font-open-sans text-xl md:text-2xl mb-8 opacity-95">
            Premium Grooming & Styling in Smethwick
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
            asChild
          >
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Book Your Appointment Now
            </a>
          </Button>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-4">
              Our Popular Services
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience premium grooming with our expert barbers and stylists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredServices.map((service) => (
              <Card key={service.name} className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-poppins font-semibold text-xl mb-2 text-foreground">
                    {service.name}
                  </h3>
                  <p className="font-open-sans text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-poppins font-semibold"
              asChild
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Ready for a Fresh Look?
          </h2>
          <p className="font-open-sans text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your appointment today and experience the Enable Cutz difference
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins font-semibold text-lg px-8 py-6 shadow-xl"
            asChild
          >
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Book Online Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
