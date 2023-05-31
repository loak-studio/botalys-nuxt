---
import Hero from "@components/layout/Hero.astro";
import Main from "@layouts/Main.astro";
import Image from "@assets/korean-ginseng/korean_ginseng_moutain.jpeg";
import OriginAndSpecies from "@components/korean-ginseng/ginseng-sourcing/OriginAndSpecies.astro";
import FalseGinseng from "@components/korean-ginseng/ginseng-sourcing/FalseGinseng.astro";
import CultivationMethods from "@components/korean-ginseng/ginseng-sourcing/CultivationMethods.astro";
import TypesOfProducts from "@components/korean-ginseng/ginseng-sourcing/TypesOfProducts.astro";
import ContactImage from "@assets/5-contact.jpg";
import TextImage from "@components/layout/TextImage.astro";
import FullSpectrum from "@components/korean-ginseng/ginseng-sourcing/FullSpectrum.astro";
---

<Main meta={{ title: "Ginseng Sourcing" }}>
  <Hero
    image={Image}
    title="Ginseng sourcing"
    items={[
      { label: "Korean Ginseng", href: "/botanicals/korean-ginseng/" },
      {
        label: "Ginseng Sourcing",
        href: "/botanicals/korean-ginseng/ginseng-sourcing/",
      },
    ]}
  >
    With a global market estimated at 80,000 tons per year and a medicinal use
    spanning over 4 millennia, Korean ginseng is one of the most valuable top
    selling botanicals in the world, and most of all: a medicinal plant whose
    history and tradition are deeply intertwined with that of humanity.
  </Hero>
  <div class="borders">
    <OriginAndSpecies />
    <FalseGinseng />
    <CultivationMethods />
    <TypesOfProducts />
    <FullSpectrum />
  </div>
  <TextImage
    logo
    button={{ label: "Contact us", href: "/contact-us/" }}
    image={ContactImage}
    tag="Get in touch"
    title="Let's go further together"
  >
    Do you have a project in mind for which you wish to unlock the full
    potential of rare medicinal plants ? Are you interested in exploring the
    innovation opportunities offered by Biomimetic Indoor Farming? Or maybe you
    want to learn more about how phytonutrients and emerging trends can
    synergize into unique new Nutraceutical formulas? Whatever your needs are,
    we would love to hear from you and help you achieve your vision. Take the
    first step and reach out to us.
  </TextImage>
</Main>
