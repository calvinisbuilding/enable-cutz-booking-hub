import galleryHaircut from "@/assets/gallery-haircut.jpg";
import galleryBeard from "@/assets/gallery-beard-new.jpg";
import galleryCleanCut from "@/assets/gallery-cleancut.jpg";
import galleryBraiding from "@/assets/gallery-braiding.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: galleryHaircut, alt: "Professional fade haircut", category: "Haircuts" },
    { src: galleryBeard, alt: "Expertly groomed beard", category: "Beard Work" },
    { src: galleryCleanCut, alt: "Clean cut haircut service", category: "Clean Cut" },
    { src: galleryBraiding, alt: "Professional braiding service", category: "Braiding" },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 sm:mb-6 tracking-wide">
            Our Work
          </h1>
          <p className="font-open-sans text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Take a look at some of our finest work. Every cut, style, and detail reflects 
            our commitment to excellence in grooming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 sm:p-6 text-primary-foreground">
                  <p className="font-bebas text-lg sm:text-xl mb-1 tracking-wide">{image.category}</p>
                  <p className="font-open-sans text-xs sm:text-sm opacity-90">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 text-center px-4">
          <p className="font-open-sans text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Want to be our next satisfied customer?
          </p>
          <a 
            href="https://calendly.com/addaebediako7/new-meeting" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground font-montserrat font-semibold px-8 sm:px-10 py-4 rounded-md transition-all duration-300 hover:shadow-lg min-h-[48px] w-full sm:w-auto"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
