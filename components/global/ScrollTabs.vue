<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const { items } = defineProps({ items: Array })
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.matchMedia().add("(min-width:1000px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: ".scroll-tabs__trigger",
        markers: true,
        start: "top 20%",
        end: "+=" + items.length * 400,
        pin: ".scroll-tabs__trigger",
        snap:{
          snapTo:1/(items.length-1),
          duration:.5
        }
      }
    })
    
    items.forEach((item, index) => {
      if (index > 0) {
        tl.addLabel('panel-' + index)
        tl.to(`.scroll-tabs__aside > *:nth-child(${index + 1})`, { background: 'rgb(77, 89, 76)', color: 'rgb(230, 226, 201)' }, 'panel-' + index)
        tl.to(`.scroll-tabs__content > .scroll-tabs__panel:nth-child(${index + 1})`, { opacity: 1 }, 'panel-' + index)
      }
      if (index < items.length - 1) {

        tl.addLabel('panelend-' + index)
        tl.to(`.scroll-tabs__content > .scroll-tabs__panel:nth-child(${index + 1})`, { opacity: 0 }, 'panelend-' + index)
        tl.to(`.scroll-tabs__aside > *:nth-child(${index + 1})`, { background: 'rgb(230, 226, 201)', color: 'rgb(77, 89, 76)' }, 'panelend-' + index)
      }
    })
  })
})

</script>

<template>
  <div class="scroll-tabs__parent">
    <section class="scroll-tabs">
      <hr class="scroll-tabs__line-1" />
      <hr class="scroll-tabs__line-2" />
      <div class="scroll-tabs__trigger">
        <hr class="scroll-tabs__line-3" />
        <hr class="scroll-tabs__line-4" />
        <div class="scroll-tabs__aside">
          <h2 @click="() => { window.scrollBy(500, 500) }"
            :class="'scroll-tabs__aside-title h6 ' + (index == 0 ? 'scroll-tabs__aside-title--active' : '')"
            v-for="(item, index ) in items" :key="index">
            {{ item.title }}
          </h2>
        </div>
        <div class="scroll-tabs__content">

          <div :class="'scroll-tabs__panel ' + (index == 0 ? 'scroll-tabs__panel--active' : '')"
            v-for="(item, index ) in items" :key="index">
            <p class="h3">{{ item.text }}</p>
            <Button :href="item.button.href" color="green">{{ item.button.label }}</Button>
            <figure class="scroll-tabs__image">
              <img :src="item.image" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.scroll-tabs__parent {
  padding: 0 4px;
}

.scroll-tabs {
  max-width: 1296px;
  margin: 0 auto;
  width: 100%;
  position: relative;
}

.scroll-tabs__trigger {
  position: relative;
  height: 600px;
  display: flex;
}

.scroll-tabs__image {
  height: 80%;
  width: 200px;
  position: absolute;
  right: 2px;
  top: 0;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

}

.scroll-tabs__aside {
  display: flex;
  flex-direction: column;
  max-width: 244px;
  width: 100%;
  border-right: 2px solid var(--nandor);
  height: 100%;
}

.scroll-tabs__content {
  flex-grow: 1;
  position: relative;
}


.scroll-tabs__panel {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0;

  &--active {
    opacity: 1;
  }
}

.scroll-tabs__aside-title {
  padding: 2rem 3rem;
  border-bottom: 2px solid var(--nandor);

  &--active {
    color: var(--half-spanish-white);
    background: var(--nandor);
  }
}


.scroll-tabs__line-1 {
  height: 100%;
  width: 2px;
  position: absolute;
  left: 0;
  top: 0;
  background: var(--nandor);
  z-index: 2;
}

.scroll-tabs__line-2 {
  height: 100%;
  width: 2px;
  position: absolute;
  right: 0;
  top: 0;
  background: var(--nandor);
}

.scroll-tabs__line-3 {
  height: 2px;
  width: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background: var(--nandor);
}

.scroll-tabs__line-4 {
  height: 2px;
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  background: var(--nandor);
}</style>