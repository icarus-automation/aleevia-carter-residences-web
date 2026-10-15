import Image from "next/image";

import { CtaLink } from "@/components/ui/cta-link";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";

export function Welcome() {
  return (
    <section
      aria-labelledby="property-heading"
      className="main-container py-24 md:py-32"
    >
      <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-6 lg:col-span-5">
          <Kicker tone="gold">The Property</Kicker>
          <h2
            id="property-heading"
            className="mt-6 max-w-[22ch] font-heading text-h2 font-light text-balance text-foreground"
          >
            Eighty-five loft homes on{" "}
            <span className="italic text-primary">one street.</span>
          </h2>
          <p className="mt-8 max-w-[48ch] text-body text-muted-foreground">
            Aleevia Carter Residences is a seven-storey building in Pasay City.
            The rooms use warm timber, stone, and built-in joinery.
          </p>
          <p className="mt-5 max-w-[48ch] text-body text-muted-foreground">
            The one-bedroom loft has a built-in desk by the window. The bath is
            stone. The kitchen sits in the joinery so the living floor stays
            clear.
          </p>
          <CtaLink href="/#residences" variant="link" className="mt-8">
            Explore the residences
          </CtaLink>
        </Reveal>

        <Reveal
          delay={0.1}
          className="md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7"
        >
          <figure className="relative aspect-4/5 w-full overflow-hidden rounded-md bg-muted">
            <Image
              src="/assets/interiors/hallway.png"
              alt="A residential corridor at Aleevia Carter, lined with warm timber panelling and lit by a tall window at the far end."
              fill
              sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-left"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
