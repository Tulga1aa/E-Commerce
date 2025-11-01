"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";

export const Banner = () => {
  const router = useRouter();
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const images = [
    { src: "/photo/Banner.svg", href: "/page1" },
    { src: "/photo/Herophoto.svg", href: "/page2" },
    { src: "/photo/Banner.svg", href: "/page3" },
    { src: "/photo/Banner.svg", href: "/page4" },
  ];

  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // Embla select-д зориулсан effect
  React.useEffect(() => {
    const emblaApi = (carouselRef.current as any)?.emblaApi;
    if (!emblaApi) return;

    const updateIndex = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", updateIndex);

    // init index
    updateIndex();

    return () => emblaApi.off("select", updateIndex);
  }, []);

  // Hover болон click-д зориулсан handler
  const handleIndicator = (index: number, href?: string, isClick?: boolean) => {
    const emblaApi = (carouselRef.current as any)?.emblaApi;
    if (!emblaApi) return;

    emblaApi.scrollTo(index, true); // Slide шилжих

    // Click бол page руу navigate
    if (isClick && href) {
      router.push(href);
    }
  };

  return (
    <div className="w-screen flex justify-center relative overflow-hidden">
      <Carousel
        ref={carouselRef as any}
        className="w-[1280px]"
        plugins={[plugin.current]}
        onMouseEnter={() => plugin.current?.stop()}
        onMouseLeave={() => plugin.current?.reset()}
      >
        <CarouselContent className="h-[350px]">
          {images.map(({ src }, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none">
                <CardContent className="p-0">
                  <img
                    src={src}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-[350px] object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Indicator dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map(({ href }, index) => (
          <button
            key={index}
            onMouseEnter={() => handleIndicator(index)}
            onClick={() => handleIndicator(index, href, true)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              selectedIndex === index
                ? "bg-blue-600 scale-125"
                : "bg-gray-400 scale-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
