"use client";

import { motion } from "motion/react";
import Image from "next/image";

import StackingCards, {
  StackingCardItem,
} from "@/components/fancy/blocks/stacking-cards";
import { Kicker } from "@/components/ui/kicker";

type Amenity = {
  eyebrow: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
};

const AMENITIES: Amenity[] = [
  {
    eyebrow: "Fitness",
    title: "Gym",
    desc: "Fitness equipment under a wood-slatted ceiling, next to windows on the city.",
    img: "/assets/amenities/gym.png",
    alt: "The gym at Aleevia Carter, wood-slatted ceiling and equipment beside floor-to-ceiling windows.",
  },
  {
    eyebrow: "Roof",
    title: "Sports court",
    desc: "An open-air multi-purpose court. Use it for a match or a morning shoot-around.",
    img: "/assets/amenities/sports-court.png",
    alt: "The rooftop multi-purpose sports court under an open sky.",
  },
  {
    eyebrow: "Roofdeck",
    title: "Lounge",
    desc: "Seating and umbrellas on the timber deck, open in the evening, with a view of the skyline.",
    img: "/assets/amenities/roof-deck-lounge.png",
    alt: "The roofdeck lounge with timber decking, lounge seating, and parasols at dusk.",
  },
  {
    eyebrow: "Shared",
    title: "Laundry",
    desc: "Stacked machines and timber cabinetry. Wash and dry without leaving the building.",
    img: "/assets/amenities/laundry-room.png",
    alt: "The shared laundry with stacked machines and warm wood shelving.",
  },
];

export function Amenities() {
  return (
    <section id="amenities" className="scroll-mt-24 py-24 md:py-32">
      <div className="main-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -12% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <Kicker tone="gold">Amenities</Kicker>
          <h2 className="mt-6 font-heading text-h2 font-light text-balance text-foreground">
            Gym, court, lounge, and laundry.
          </h2>
          <p className="mt-6 max-w-[52ch] text-body text-muted-foreground">
            Four shared rooms. Same timber and stone as the homes.
          </p>
        </motion.div>
      </div>

      <StackingCards totalCards={AMENITIES.length} className="main-container">
        {AMENITIES.map((item, index) => (
          <StackingCardItem
            key={item.title}
            index={index}
            className="h-[78vh] pb-6 md:h-[82vh]"
          >
            {/* The render is anchored bottom-right so its printed "Artist's
                perspective" badge is never cropped. Below lg the copy sits on a
                solid panel under the image so it can't cover the badge; from lg
                the image goes full-bleed and the scrim fades out before it. */}
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-md bg-foreground">
              <div className="relative min-h-0 flex-1 lg:absolute lg:inset-0">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1280px) 80vw, 100vw"
                  className="object-cover object-right-bottom"
                />
              </div>
              <div
                aria-hidden
                className="absolute inset-0 hidden bg-gradient-to-r from-foreground/90 via-foreground/60 to-transparent lg:block"
              />
              <div className="relative p-6 md:p-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:p-16">
                <div className="max-w-2xl">
                  <span
                    aria-hidden
                    className="block font-heading text-6xl font-light leading-none text-gold md:text-7xl"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-caption font-medium uppercase tracking-kicker text-background/80">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-2 font-heading text-h3 font-normal text-background">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-body text-background/85">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          </StackingCardItem>
        ))}
      </StackingCards>
    </section>
  );
}
