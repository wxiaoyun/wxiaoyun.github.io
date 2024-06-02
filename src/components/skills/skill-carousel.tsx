"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselOptions,
} from "@/components/ui/carousel";

type SkillGridProps = {
  skills: React.ReactNode[];
  autoplayInterval?: number;
  initDelay?: number;
} & Props;

export const SkillCarousel: React.FC<SkillGridProps> = ({
  skills,
  autoplayInterval = 1500,
  initDelay = 0,
  className,
}) => {
  const opts: CarouselOptions = {
    align: "start",
    loop: true,
  };

  const autoplayPlugin = Autoplay({
    delay: autoplayInterval,
    playOnInit: false,
    stopOnInteraction: false,
  });

  React.useEffect(() => {
    setTimeout(() => {
      autoplayPlugin.play();
      return () => autoplayPlugin.stop();
    }, initDelay);
  }, [autoplayPlugin, initDelay]);

  return (
    <Carousel className={className} opts={opts} plugins={[autoplayPlugin]}>
      <CarouselContent className="-ml-2 sm:-ml-4">
        {skills.map((s, i) => (
          <CarouselItem
            key={i}
            className="basis-1/3 sm:basis-1/4 md:basis-1/5 ml-2 sm:ml-4"
          >
            {s}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SkillCarousel;
