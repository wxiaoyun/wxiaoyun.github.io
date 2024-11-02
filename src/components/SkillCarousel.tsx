import { splitArray } from "@/util";
import Autoplay from "embla-carousel-autoplay";
import {
  createMemo,
  For,
  onCleanup,
  onMount,
  type Component,
  type ComponentProps,
  type JSX,
} from "solid-js";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export type SkillCarouselProps = {
  skills: JSX.Element[];
  initDelay?: number;
  class?: string;
};

export const SkillCarousel: Component<SkillCarouselProps> = (props) => {
  const opts = {
    align: "start",
    loop: true,
  };

  const autoplayPlugin = Autoplay({
    delay: 2000,
    playOnInit: false,
    stopOnInteraction: false,
  });

  onMount(() => {
    console.log(props.initDelay);
    setTimeout(() => {
      autoplayPlugin.play();
    }, props.initDelay ?? 0);
  });
  onCleanup(() => autoplayPlugin.stop());

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Carousel class={props.class} opts={opts as any} plugins={[autoplayPlugin]}>
      <CarouselContent class="-ml-2 sm:-ml-4">
        <For each={props.skills}>
          {(s) => (
            <CarouselItem class="basis-1/3 sm:basis-1/4 md:basis-1/5 ml-2 sm:ml-4">
              {s}
            </CarouselItem>
          )}
        </For>
      </CarouselContent>
    </Carousel>
  );
};

type SkillGridProps = {
  skills: JSX.Element[];
  rowsDelay?: number;
  rowSize?: number;
  class?: string;
} & ComponentProps<"div">;

export const SkillGrid: Component<SkillGridProps> = (props) => {
  const skillMatrix = createMemo(() =>
    splitArray(props.skills, props.rowSize ?? 6),
  );
  return (
    <div class={props.class}>
      <For each={skillMatrix()}>
        {(row, i) => (
          <SkillCarousel
            skills={row}
            initDelay={(props.rowsDelay ?? 300) * i()}
          />
        )}
      </For>
    </div>
  );
};
