<template>
  <div class="index-harness__parent">
    <section class="index-harness">
    <div class="index-harness__container">
      <Tag>Join us</Tag>
      <h2 class="h2 index-harness__title">Harness the full potential of rare medicinal plants while preserving their wild biotopes</h2>
      <p class="text index-harness__text">BOTALYS uses an innovative Biomimetic Indoor Farming technology to recreate the ideal wild
        conditions for rare botanicals to grow in. We develop pristine & potent botanical ingredients for the
        Nutraceutical and Cosmetic industries.</p>
      <Button href="#" color="green">About us</Button>
      <hr class="index-harness__line-1"/>
      <hr class="index-harness__line-2"/>
      <hr class="index-harness__line-3"/>
    </div>
  </section>
  </div>
</template>

<style lang="scss">
.index-harness__parent{
  padding: 0 4px;
}
.index-harness {
  padding-top: 120px;
  padding-bottom: 120px;
  max-width: 1296px;
  margin: 0 auto;
  position: relative;
  width: 100%;
}

.index-harness__container {
  max-width: 858px;
  margin: 0 auto;
}

.index-harness__text{
  margin: 40px 0;
}

.index-harness__line-1{
  position: absolute;
  left: 0;
  top:0;
  height: 100%;
  width: 2px;
  background: var(--nandor);
}
.index-harness__line-2{
  position: absolute;
  right: 0;
  top:0;
  height: 100%;
  width: 2px;
  background: var(--nandor);
  z-index: -1;
}
.index-harness__line-3{
  position: absolute;
  left: 0;
  top:0;
  height: 2px;
  width: 100%;
  background: var(--nandor);
  z-index: -1;
}
@media (max-width: 1000px) {
  .index-harness{
    padding: 40px 1rem;
  }
}
</style>