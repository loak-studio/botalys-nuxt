---
import Hero from "@components/korean-ginseng/studies/GingsengForMentalStaminaHero.astro";
import Main from "@layouts/Main.astro";
import HeroImage from "@assets/korean-ginseng/brain.png";
import REDGinseng from "@components/korean-ginseng/studies/REDGinseng.astro";
import ProprietaryData from "@components/korean-ginseng/studies/ProprietaryData.astro";
import ProprietaryDataText from "@components/korean-ginseng/studies/ProprietaryDataText.astro";
import TextImage from "@components/layout/TextImage.astro";
import ContactImage from "@assets/5-contact.jpg";
import PreclinicalStudies from "@components/korean-ginseng/studies/PreclinicalStudies.astro";
import PreclinicalStudiesGraph from "@components/korean-ginseng/studies/PreclinicalStudiesGraph.astro";
import ShortTermMemoryText from "@components/korean-ginseng/studies/ShortTermMemoryText.astro";
import BannerWithStats from "@components/layout/BannerWithStats.astro";
import IncreaseInFocus from "@components/korean-ginseng/studies/IncreaseInFocus.astro";
import HowDidConsumersFeel from "@components/korean-ginseng/studies/HowDidConsumersFeel.astro";
---

<Main meta={{ title: "Ginseng for mental stamina" }}>
  <Hero
    items={[
      { label: "Korean Ginseng", href: "/botanicals/korean-ginseng/" },
      {
        label: "Ginseng for Mental Stamina",
        href: "/botanicals/korean-ginseng/ginseng-for-mental-stamina/",
      },
    ]}
    image={HeroImage}
    title="Ginseng for Mental Stamina"
  >
    Recent studies have brought attention to Korean ginseng's potent neuroactive
    properties. From boosting mental clarity and focus to fighting fatigue and
    reducing stress, ginseng’s demonstrated benefits for cognitive performance
    have made it an essential natural phytoactive ingredient in addressing the
    health challenges of modern living.
  </Hero>
  <REDGinseng />
  <ProprietaryData />
  <ProprietaryDataText />
  <BannerWithStats
    title="Preclinical studies"
    tag="Proprietary Studies"
    items={[
      { label: "rats", number: "22" },
      { label: "mg/kg/day", number: "50" },
      { label: "days", number: "8" },
    ]}
  />
  <PreclinicalStudies />
  <PreclinicalStudiesGraph />
  <ShortTermMemoryText />
  <BannerWithStats
    title="Clinical Study"
    tag="Proprietary Studies"
    items={[
      { label: "Participants", number: "50" },
      { label: "mg/day", number: "400" },
      { label: "weeks", number: "2" },
    ]}
  />

  <IncreaseInFocus />
  <BannerWithStats
    title="Usage test"
    tag="Proprietary Studies"
    items={[
      { label: "Participants", number: "160" },
      { label: "mg/day", number: "400" },
      { label: "weeks", number: "20" },
    ]}
  />
  <HowDidConsumersFeel />
  <TextImage
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
