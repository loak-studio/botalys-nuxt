<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
onMounted(()=>{
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:'.index-discover',
      start:"top 30%",
    }
  })
  tl.from('.index-discover__line-3',{
    width:0
  })
  tl.from('.index-discover__image', {
    y:100,
    opacity:0
  })
  tl.from('.index-discover__icon',{
    x: 100,
    opacity:0
  })
})
</script>

<template>
  <section class="index-discover">
    <div class="index-discover__container">
      <hr class="index-discover__line-1" />
      <hr class="index-discover__line-2" />
      <div class="index-discover__sub-container">
        <div class="index-discover__title-container">
          <h1 class="h1 index-discover__title">We are botanical explorers</h1>
          <hr class="index-discover__line-3" />
        </div>
        <div class="index-discover__text">
          <p class="h4 index-discover__paragraph">Botalys is a supplier of premium ingredients for the Nutraceutical and
            Cosmeceutical industries. </p>
          <p class="h4 index-discover__paragraph">We make the impossible sourcing of rare botanicals possible and
            sustainable,
            allowing our clients to harness the full potential of biodiversity while preserving it.</p>
          <Button class="index-discover__button" href="#" color="green">Discover our approach</Button>
        </div>
      </div>
      <Icon :color="colors.mikadoYellow" class="index-discover__icon"/>
      <figure class="index-discover__image">
        <img src="~/assets/images/butterfly.png" alt="">
      </figure>
    </div>
  </section>
</template>

<style lang="scss">
.index-discover__container {
  max-width: 1296px;
  width: 100%;
  margin: 0 auto;
  padding: 149px 1rem;
  position: relative;
}

.index-discover__sub-container {
  max-width: 1024px;
  margin: 0 auto;
}

.index-discover__sub-container .index-discover__title,
.index-discover__sub-container .index-discover__paragraph {

  max-width: 616px;

}

.index-discover__line-1 {
  height: 100%;
  width: 2px;
  background: var(--nandor);
  left: 0;
  top: 0;
  position: absolute;
}

.index-discover__line-2 {
  height: 100%;
  width: 2px;
  background: var(--nandor);
  right: 0;
  top: 0;
  position: absolute;
}

.index-discover__line-3 {
  width: 100%;
  height: 2px;
  background: var(--nandor);
  left: 0;
  position: absolute;
  margin-top: 30px;
}

.index-discover__paragraph {
  margin-bottom: 1rem;
}

.index-discover__button {
  margin-top: 1rem;
}

.index-discover__title-container {
  padding-bottom: 30px;
  margin-bottom: 30px;
}

.index-discover__image {
  position: absolute;
  right: -94px;
  bottom: -77px;
  width: 559px;
  border-radius: 275px 0px 0px 0px;
  overflow: hidden;
  height: 838px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.index-discover__icon{
  position: absolute;
  right: 24px;
  bottom: 24px;
  z-index: 1;
}

@media (max-width: 1328px) {
  .index-discover {
    margin: 0 4px;
  }
}

@media (max-width: 1230px) {
  .index-discover__image{
    width: 350px;
    right: 0;
  }
}
@media (max-width: 1000px) {
  .index-discover__container {
    padding: 40px 1rem;
    padding-bottom: 240px;
  }
  .index-discover__image{
  border-radius: 200px 0px 0px 0px;
    right: 0;
    height: 200px;
    bottom: 0;
    width: 90%;
  }
}</style>