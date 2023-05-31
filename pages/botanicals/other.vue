---
import TextImage from "@components/layout/TextImage.astro";
import OtherBotanicalsHero from "@components/other-botanicals/OtherBotanicalsHero.astro";
import OtherBotanicalsNewPlantDevelopmentPlatform from "@components/other-botanicals/OtherBotanicalsNewPlantDevelopmentPlatform.astro";
import OtherBotanicalsSteps from "@components/other-botanicals/OtherBotanicalsSteps.astro";
import Main from "@layouts/Main.astro";

import ContactImage from "@assets/5-contact.jpg";
---

<Main meta={{ title: "Other botanicals" }}>
  <OtherBotanicalsHero />
  <OtherBotanicalsNewPlantDevelopmentPlatform />
  <OtherBotanicalsSteps />
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
