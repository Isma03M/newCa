
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/Img/env1.jpg",
  "/Img/env1.jpg",
  "/Img/env1.jpg",
  "/Img/env1.jpg",
  "/Img/env1.jpg",
  "/Img/env1.jpg",
  "/Img/env1.jpg",
  "/Img/env1.jpg",
  "/Img/env1.jpg",
];

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger>
              <div 
                className="relative h-64 cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={image}
                  alt={`Facility image ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[90vw] h-[90vh] bg-black">
              <div className="absolute top-4 left-4 z-50 text-white text-lg font-serif">
                {selectedIndex + 1}/{images.length}
              </div>
              <Carousel 
                className="w-full h-full pt-16"
                onSelect={(index) => setSelectedIndex(index)}
              >
                <CarouselContent>
                  {images.map((img, i) => (
                    <CarouselItem key={i}>
                      <div className="flex items-center justify-center h-full">
                        <img
                          src={img}
                          alt={`Facility image ${i + 1}`}
                          className="max-h-[70vh] w-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
