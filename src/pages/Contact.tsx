import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-bebas text-6xl md:text-7xl text-foreground mb-6 tracking-wide">
            Contact Us
          </h1>
          <p className="font-open-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            Visit us today or get in touch to book your appointment. We're here to help you look your best.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bebas text-xl text-foreground mb-2 tracking-wide">
                      Address
                    </h3>
                    <p className="font-open-sans text-muted-foreground">
                      181 Sandon Road<br />
                      Smethwick<br />
                      B66 4AA
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bebas text-xl text-foreground mb-2 tracking-wide">
                      Phone
                    </h3>
                    <a 
                      href="tel:+447459700262" 
                      className="font-open-sans text-muted-foreground hover:text-accent transition-colors"
                    >
                      07459 700262
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bebas text-xl text-foreground mb-2 tracking-wide">
                      Email
                    </h3>
                    <a 
                      href="mailto:addaebediako7@gmail.com" 
                      className="font-open-sans text-muted-foreground hover:text-accent transition-colors"
                    >
                      addaebediako7@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bebas text-xl text-foreground mb-2 tracking-wide">
                      Business Hours
                    </h3>
                    <div className="font-open-sans text-muted-foreground space-y-1">
                      <p>Sunday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 2:00 PM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-accent/10 border border-accent rounded-lg p-8 text-center">
              <h3 className="font-bebas text-3xl text-foreground mb-4 tracking-wide">
                Ready to Book?
              </h3>
              <p className="font-open-sans text-muted-foreground mb-6">
                Schedule your appointment online for a convenient time that works for you
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-montserrat font-semibold"
                asChild
              >
                <a href="https://calendly.com/addaebediako7/new-meeting" target="_blank" rel="noopener noreferrer">
                  Book an Appointment
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="h-[600px] rounded-lg overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.4067892384876!2d-1.9763445!3d52.4964523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc5c8e44d3e7%3A0x8b5e0f5e5e5e5e5e!2s181%20Sandon%20Rd%2C%20Smethwick%20B66%204AA%2C%20UK!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Enable Cutz Barbers Salon Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
