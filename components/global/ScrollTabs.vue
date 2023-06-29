<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const { items } = defineProps({ items: Array })
let tl
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.matchMedia().add("(min-width:1000px)", () => {
    tl = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: ".scroll-tabs__trigger",
        markers: false,
        start: "50% 50%",
        end: "+=" + items.length * 200,
        pin: ".scroll-tabs__trigger",
        snap:{
          snapTo:1/(items.length-1),
          duration:1
        }
      }
    })
      console.log(1/(items.length-1))
    items.forEach((item, index) => {
      if (index > 0) {
        tl.addLabel('panel-' + index)
        tl.to(`.scroll-tabs__aside > *:nth-child(${index + 1})`, { background: 'rgb(77, 89, 76)', color: 'rgb(230, 226, 201)' }, 'panel-' + index)
        tl.to(`.scroll-tabs__content > .scroll-tabs__panel:nth-child(${index + 1})`, { opacity: 1 }, 'panel-' + index)
     
      }
      if (index < items.length - 1) {

        tl.add(()=>{}, "+=5")
        tl.addLabel('panelend-' + index)
        tl.to(`.scroll-tabs__content > .scroll-tabs__panel:nth-child(${index + 1})`, { opacity: 0, y:50 }, 'panelend-' + index)
        tl.to(`.scroll-tabs__aside > *:nth-child(${index + 1})`, { background: 'rgb(230, 226, 201)', color: 'rgb(77, 89, 76)' }, 'panelend-' + index)
      }
    })
  })
})
onUnmounted(()=>{
  if(tl){
    tl.kill()
  }
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
            <div class="scroll-tabs__panel-content">
              <p :data-text="item.title" class="h3 scroll-tabs__panel-title">{{ item.text }}</p>
            <botalys-button :href="item.button.href" color="green">{{ item.button.label }}</botalys-button>
            </div>
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
  height: 682px;
  display: flex;
}

.scroll-tabs__image {
  height: 787px;
  width: 498px;
  position: absolute;
  right: -66px;
  top: -52px;
  border-radius: 322.5px 0px 0px 0px;
  overflow: hidden;
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

.scroll-tabs__panel-content{
  max-width: 890px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 166px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.scroll-tabs__panel-title{
  width: 466px;
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
}

@media (max-width:1200px) {
  .scroll-tabs__image{
    width: 300px;
  border-radius: 222.5px 0px 0px 0px;
  }
}

@media (max-width: 1000px) {
    .scroll-tabs__image{
      display: none;
    }
    .scroll-tabs__aside{
      display: none;
    }
    .scroll-tabs__panel{
      position: static;
      opacity: 1;
      height: auto;
    }
    .scroll-tabs__panel-content{
      margin-top: 0;
      justify-content: flex-start;
      height: auto;
      padding:40px 1rem;
      border-bottom: 2px solid var(--nandor);
    }
    .scroll-tabs__trigger{
      height: auto;
    }
    .scroll-tabs__panel-title{
      margin-bottom: 3rem;
      width: auto;
    }
    .scroll-tabs__panel-title::before{
      content:attr(data-text);
      display: block;
      padding: 48px;
      font-size: 20px;
      color: var(--half-spanish-white);
      background: var(--nandor);
      margin-bottom: 24px;
    }
}
</style>