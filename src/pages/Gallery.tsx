import galleryHaircut from "@/assets/gallery-haircut.jpg";
import galleryBeard from "@/assets/gallery-beard-new.jpg";
import galleryCleanCut from "@/assets/gallery-cleancut.jpg";
import galleryBraiding from "@/assets/gallery-braiding.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryKids from "@/assets/gallery-kids.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: galleryHaircut, alt: "Professional fade haircut", category: "Haircuts" },
    { src: galleryBeard, alt: "Expertly groomed beard", category: "Beard Work" },
    { src: galleryCleanCut, alt: "Clean cut haircut service", category: "Clean Cut" },
    { src: galleryBraiding, alt: "Professional braiding service", category: "Braiding" },
    { src: galleryInterior, alt: "Modern barbershop interior", category: "Shop Interior" },
    { src: galleryKids, alt: "Children's haircut service", category: "Kids Cuts" },
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-foreground mb-6">
            Our Work
          </h1>
          <p className="font-open-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            Take a look at some of our finest work. Every cut, style, and detail reflects 
            our commitment to excellence in grooming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-primary-foreground">
                  <p className="font-poppins font-semibold text-lg mb-1">{image.category}</p>
                  <p className="font-open-sans text-sm opacity-90">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-open-sans text-muted-foreground mb-6">
            Want to be our next satisfied customer?
          </p>
          <a 
            href="https://calendly.com/addaebediako7/new-meeting" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-poppins font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
