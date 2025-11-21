import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import logo from '../assets/slider/pushpa.jpeg'
import medical from '../assets/slider/medical.jpeg'
import propery from '../assets/slider/proprty.jpeg'
import tech from '../assets/slider/technology.jpeg'
import auto from '../assets/slider/auto.jpeg'
import jwels from '../assets/slider/jwels.jpeg'

interface HeroSliderProps {
  onExplore: (businessId: string) => void;
}

export function HeroSlider({ onExplore }: HeroSliderProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const slides = [
    {
      id: 'finance',
      title: '',
      subtitle: '',
      description: '',
      imageUrl: logo,
      buttonText: 'Explore Finance'
    },
    {
      id: 'medical',
      title: 'PUSHPA AGENCY',
      subtitle: 'Healthcare You Can Trust',
      description: 'Leading medical supplies distributor providing quality Ayurvedic And OTC products',
      imageUrl: medical,
      buttonText: 'Explore Medical' 
    },
    {
      id: 'vehicles',
      title: 'SILVER DRIVE',
      subtitle: 'Drive Your Dreams',
      description: 'Premium selection of pre-owned cars and bikes',
      imageUrl: auto,
      buttonText: 'Explore Vehicles'
    },
    {
      id: 'technology',
      title: 'TECHNOLOGY DEVELOPMENT',
      subtitle: 'Innovative Digital Solutions',
      description: 'Website & App Development, Digital Advertising, and Technology Training',
      imageUrl: tech,
      buttonText: 'Explore Technology'
    },
    {
      id: 'realestate',
      title: 'SILVER DRIVE PROPERTIES',
      subtitle: 'Your Dream Property Awaits',
      description: 'Buy and sell residential and commercial properties with ease',
      imageUrl: propery,
      buttonText: 'Explore Properties'
    },
    {
      id: 'jewels',
      title: 'PUSHPA JEWELS',
      subtitle: 'Exquisite Gold & Diamond Jewelry',
      description: 'Handcrafted Gold coated jewelry for every special occasion in your life',
      imageUrl: jwels,
      buttonText: 'Explore Jewelry' 
    }
  ];

  return (
    <section className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[400px] md:h-[500px] lg:h-[550px] w-full overflow-hidden">
                {/* Background Image */}
                <ImageWithFallback
                  src={slide.imageUrl}
                  // alt={slide.title}
                  className="absolute inset-0 w-full h-full "
                  // object-cover
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                
                {/* Content */}
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                  <div className="max-w-2xl">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* <p className="text-blue-400 mb-2 tracking-wider">{slide.subtitle}</p>
                      <h1 className="text-white mb-4">{slide.title}</h1>
                      <p className="text-gray-200 text-xl mb-8">{slide.description}</p> */}
                      <Button
                        onClick={() => onExplore(slide.id)}
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white "
                      >
                        {slide.buttonText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-black/50 border-blue-500 hover:bg-black/70 text-white" />
        <CarouselNext className="right-4 bg-black/50 border-blue-500 hover:bg-black/70 text-white" />
      </Carousel>
    </section>
  );
}
