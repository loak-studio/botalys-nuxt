---
import Hero from "@components/korean-ginseng/KoreanGinsengHero.astro";
import TextImage from "@components/layout/TextImage.astro";
import Main from "@layouts/Main.astro";
import Image from "@assets/korean-ginseng/korean_ginseng_moutain.jpeg";
import KoreanGinsengTable from "@components/korean-ginseng/KoreanGinsengTable.astro";
import KoreanGinsengForHealth from "@components/korean-ginseng/KoreanGinsengForHealth.astro";
import KoreanGinsengForMentalStamina from "@components/korean-ginseng/KoreanGinsengForMentalStamina.astro";
---

<Main meta={{ title: "Korean Ginseng" }}>
  <Hero />
  <TextImage
    tag="Ginseng supply"
    image={Image}
    title="A Sourcing Nightmare"
    button={{
      label: "Delve into the Challenges of Ginseng Sourcing",
      href: "/botanicals/korean-ginseng/ginseng-sourcing/",
    }}
  >
    <p class="text">
      In recent years, word of ginseng’s extraordinary health benefits has
      spread across the globe, leading to an unprecedented explosion in demand.
    </p>
    <p class="text">
      But like any highly sought-after and valuable botanical, ginseng’s success
      comes at the price of serious supply and sustainability issues - making it
      increasingly challenging for meticulous brands to source high quality
      ginseng.
    </p>
  </TextImage>
  <KoreanGinsengTable />
  <KoreanGinsengForMentalStamina />
  <KoreanGinsengForHealth />
</Main>

<style scoped>
  .text + .text {
    margin: 2rem 0;
  }
</style>
