"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Banner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="mx-auto w-[1200px] "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-[310]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="h-[300px]">
              <Card>
                <CardContent className="flex rounded-xl w-[1200px] h-[310px] items-center justify-center p-6">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <div className="w-[1300px h-[300px]">
                    <img
                      className="w-[1300px] h-[300px] "
                      src="/photo/Banner.svg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-[100px]" />
      <CarouselNext className="mr-[100px]" />
    </Carousel>
  );
};
