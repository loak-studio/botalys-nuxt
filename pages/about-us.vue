---
import Hero from "@components/layout/Hero.astro";
import Main from "../layouts/Main.astro";
import TextImage from "@components/layout/TextImage.astro";
import ContactImage from "@assets/5-contact.jpg";
import AboutUsAMatterOfStandards from "@components/about-us/AboutUsAMatterOfStandards.astro";
import AboutUsToMakeTheImpossible from "@components/about-us/AboutUsToMakeTheImpossible.astro";
import AboutUsWildernessIsAWorkOfArt from "@components/about-us/AboutUsWildernessIsAWorkOfArt.astro";
import AboutUsHero from "@components/about-us/AboutUsHero.astro";
---

<Main meta={{ title: "About us" }}>
  <AboutUsHero />
  <div class="borders borders-big-z">
    <AboutUsWildernessIsAWorkOfArt />
    <AboutUsToMakeTheImpossible />
    <AboutUsAMatterOfStandards />
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
