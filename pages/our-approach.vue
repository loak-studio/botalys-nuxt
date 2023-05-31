---
import OurApproachHero from "@components/our-approach/OurApproachHero.astro";
import Image from "@assets/our-approach/bell.png";
import Main from "../layouts/Main.astro";
import OurAppraochWildPotency from "@components/our-approach/OurAppraochWildPotency.astro";
import OurApproachWhatWeOffer from "@components/our-approach/OurApproachWhatWeOffer.astro";
import OurApproachStandingForWilderness from "@components/our-approach/OurApproachStandingForWilderness.astro";
import OurApproachNumbers from "@components/our-approach/OurApproachNumbers.astro";
---

<Main meta={{ title: "Our Approach" }}>
  <OurApproachHero
    title={"Our Approach"}
    image={Image}
    items={[{ label: "Our Approach", href: "/our-approach/" }]}
  >
    We make the sourcing of rare medicinal plants both possible and sustainable,
    allowing our clients to harness the full potential of biodiversity while
    preserving it.</OurApproachHero
  >
  <OurAppraochWildPotency />
  <OurApproachWhatWeOffer />
  <OurApproachStandingForWilderness />
  <OurApproachNumbers />
</Main>
