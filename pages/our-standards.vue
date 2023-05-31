---
import Hero from "@components/layout/Hero.astro";
import OurStandardsConsumersWantIt from "@components/our-standards/OurStandardsConsumersWantIt.astro";
import Main from "../layouts/Main.astro";
import TextImage from "@components/layout/TextImage.astro";
import Image from "@assets/zoomed_leaf_with_water_drop.jpeg";
import OurStandardsTabsAndText from "@components/our-standards/OurStandardsTabsAndText.astro";
import Image1 from "@assets/standard_s1.png";
import Image2 from "@assets/standard_s2.png";
import Image3 from "@assets/standard_s3.png";
import Image4 from "@assets/standard_s4.png";
import DarkMountainImage from "@assets/mountain_dark_sky.jpg";
---

<Main meta={{ title: "Our Standards" }}>
  <Hero
    items={[{ label: "Our Standards", href: "/our-standards/" }]}
    image={DarkMountainImage}
    title="Our standards"
  >
    BOTALYS ambitions to set higher standards in botanicals sourcing for brands
    that will not settle for anything less than excellence.
  </Hero>
  <OurStandardsConsumersWantIt />
  <TextImage
    id="raise-the-bar"
    image={Image}
    tag="Biomimetic Indoor Farming"
    title="We raise the bar <br/> for botanicals sourcing"
  >
    <span
      >Thanks to its innovative proprietary technology, BOTALYS is able to
      produce the most pristine quality botanicals in the world.</span
    >
    <span
      >From absolute purity to complete standardization, BOTALYS has taken up
      the bold challenge of ticking all the boxes of an ideal botanicals supply.
      So that our clients no longer have to choose between quality,
      effectiveness and sustainability.</span
    >
  </TextImage>
  <OurStandardsTabsAndText
    isFirstItem
    image={Image1}
    title="Adulteration free"
    tabsTitles={["How do we achieve that ?", "How can we guarantee that ?"]}
  >
    <div class="text" slot="text">
      Adulteration is a widespread issue in the industry of botanicals. We, at
      BOTALYS, have pledged to bring to market the most thorough seed to
      ingredient traceability to suppress any risk of adulteration along the
      process.
    </div>
    <div class="item text" slot="first-tab">
      <p>
        BOTALYS only uses proprietary cultivars for each plant it grows. Each
        botanical species is grown alone in a purified environment, to ensure
        full traceability.
      </p>
      <p>
        In addition, our quality team regularly controls the authenticity of its
        cultivars through DNA analysis.
      </p>
    </div>
    <div class="item text" slot="second-tab">
      BOTALYS can provide DNA test results attesting to the botanical identity
      and unadulterated nature of the product.
    </div>
  </OurStandardsTabsAndText>
  <OurStandardsTabsAndText
    roundedBottomLeft={true}
    image={Image2}
    title="Absolute purity"
    tabsTitles={["How do we achieve that ?", "How can we guarantee that ?"]}
  >
    <div class="text" slot="text">
      We, at BOTALYS, have a zero-tolerance policy when it comes to
      contaminants. Whether it is pesticides, heavy metals or ethylene oxide,
      any contamination at all – even in trace amounts – carries a risk for
      health and is therefore inadmissible. BOTALYS’ ingredients however, are
      entirely safe and free from any contaminants whatsoever.
    </div>
    <div class="item text" slot="first-tab">
      <p>
        BOTALYS’ medicinal plants are grown under sterile conditions in clinical
        grade facilities. And because the plant’s environment is purified and
        free of any contamination, its cultivation does not require the use of
        pesticides.
      </p>
      <p>
        For each botanical, the entire supply chain is vertically integrated
        from seed to ingredient, allowing our team full control of each step,
        without any externalization.
      </p>
    </div>
    <div class="item text" slot="second-tab">
      We can provide certified third-party analysis attesting to the purity of
      each product.
    </div>
  </OurStandardsTabsAndText>
  <OurStandardsTabsAndText
    image={Image3}
    title="Complete standardization"
    tabsTitles={["How do we achieve that ?", "How can we guarantee that ?"]}
  >
    <div class="text" slot="text">
      Like any natural raw material, plants have a high degree of molecular
      variability, which makes it difficult to ensure consistent clinical
      potency. In response to this, the industry has come up with extract
      standardization. However, only a minimal fraction of the plants’ molecular
      spectrum is standardized; the rest of it remains highly variable. A
      medicinal plant is a complex synergistic bioactive cocktail and at
      BOTALYS, we believe molecular precision and standardization are the key
      delivering potent and consistent health benefits.
    </div>
    <div class="item text" slot="first-tab">
      <p>
        By using a unique plant cultivar grown under strictly identical
        environmental conditions, BOTALYS can produce the same phytochemical
        fingerprint in every batch.
      </p>
      <p>
        Our medicinal plants are molecularly analyzed on a weekly basis to
        ensure complete standardization and avoid any deviation from the
        strictly determined optimal profile.
      </p>
    </div>
    <div class="item text" slot="second-tab">
      For its Korean ginseng, BOTALYS quantifies more than 25 key phytonutrients
      in order to ensure that the process delivers perfectly stable products
      from one batch to another.
    </div>
  </OurStandardsTabsAndText>
  <OurStandardsTabsAndText
    roundedBottomLeft={true}
    image={Image4}
    title="Wilderness preservation"
    tabsTitles={["How do we achieve that ?", "How can we guarantee that ?"]}
  >
    <div class="text" slot="text">
      <p>
        Most premium ingredient suppliers claim to have a sustainable sourcing
        and pride themselves on respecting the environment, yet most medicinal
        plants come directly from wild harvesting or intensive crop monoculture.
      </p>
      <p>
        Even when organic or responsible, both intensive agriculture and wild
        plant collection approaches share a massive environmental drawback: they
        damage biodiversity. BOTALYS’ approach allows us to just let those wild
        biotopes be, which is the best way we know to protect them.
      </p>
    </div>
    <div class="item text" slot="first-tab">
      <p>
        Every single BOTALYS plant is grown in our European-based indoor farm, a
        2000 m2 facility built to grow more than 50 tons of fresh medicinal
        plants each year.
      </p>
      <p>
        Since the production capacity can be expanded vertically, BOTALYS’
        process requires no deforestation.
      </p>
    </div>
    <div class="item text" slot="second-tab">
      BOTALYS can provide a statement of origin that certifies that every plant
      is entirely grown in our clinical-grade facility in Belgium.
    </div>
  </OurStandardsTabsAndText>
  <OurStandardsTabsAndText
    title="Resilient supply chain"
    tabsTitles={["How do we achieve that ?", "How can we guarantee that ?"]}
  >
    <div class="text" slot="text">
      In the current context of increasing demand, climate change and
      geopolitical instability, the supply chain of qualitative medicinal plants
      has been shaken to its core and the supply and use of botanical
      ingredients is becoming increasingly dicey. BOTALYS’ unique approach
      allows us to provide our customers with a resilient supply chain with
      minimal risks and consistent batch-to-batch quality.
    </div>
    <div class="item text" slot="first-tab">
      <p>
        BOTALYS’ harvest yield is stable and independent of seasonal and
        climatic factors and our medicinal plants can be harvested all year
        long.
      </p>
      <p>
        In addition, BOTALYS’ indoor farm is located at the heart of Europe, in
        one of the most stable regions in the world.
      </p>
    </div>
    <div class="item text" slot="second-tab">
      You will have to trust us on that one…
    </div>
  </OurStandardsTabsAndText>
</Main>

<style scoped>
  .text {
    color: var(--dark-jungle-green);
  }
  .item {
    padding: 3rem;
    color: var(--half-spanish-white);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: 1000px) {
    .item {
      padding: 1rem;
    }
  }
</style>
