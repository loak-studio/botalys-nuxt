<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { hasAnimationBeenPlayed } from '~/stores/animation-store';
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  const scrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero',
      scrub: true,
      start: "60% 50%",
      end: "bottom top",
    }
  })
  if(!hasAnimationBeenPlayed()){

  document.querySelector('html').style.overflow = "hidden"
  setTimeout(() => {
    document.querySelector('html').style.removeProperty('overflow')
  }, 800)
    const autoTimeline = gsap.timeline()
  autoTimeline.from('.hero__line-1', {
    yPercent: -100,
    opacity: 0
  }, 0)
  autoTimeline.from('.hero__line-2', {
    yPercent: 100,
    opacity: 0
  }, 0)
  autoTimeline.from('.hero__line-3', {
    yPercent: 100,
    opacity: 0
  }, 0)
  autoTimeline.from('.hero__line-4', {
    xPercent: 100,
    opacity: 0
  }, 0)
  autoTimeline.from('.hero__line-5', {
    xPercent: -100,
    opacity: 0
  }, 0)
  autoTimeline.from('.hero__line-6', {
    yPercent: 100,
    opacity: 0
  }, 0)
  autoTimeline.from('.hero__logo', {
    opacity: 0,
  }, .5)
  autoTimeline.from('.hero__tagline-list', {
    opacity: 0,
  }, .5)
  autoTimeline.from('.hero__icon', {
    opacity: 0,
    yPercent: 100,
  }, .2)
  autoTimeline.from('.hero__header', {
    opacity: 0,
    marginTop: -100,
  }, .2)
  }
  scrollTimeline.to('.hero__line-1', {
    yPercent: -100,
    opacity: 0
  }, 0)
  scrollTimeline.to('.hero__line-2', {
    yPercent: 100,
    opacity: 0
  }, 0)
  scrollTimeline.to('.hero__line-3', {
    yPercent: 100,
    opacity: 0
  }, 0)
  scrollTimeline.to('.hero__line-4', {
    xPercent: 100,
    opacity: 0
  }, 0)
  scrollTimeline.to('.hero__line-5', {
    xPercent: -100,
    opacity: 0
  }, 0)
  scrollTimeline.to('.hero__line-6', {
    yPercent: 100,
    opacity: 0
  }, 0)
  scrollTimeline.to('.hero__logo', {
    opacity: 0,
  }, .5)
  scrollTimeline.to('.hero__tagline-list', {
    opacity: 0,
  }, .5)
  scrollTimeline.to('.hero__icon', {
    opacity: 0,
    yPercent: 100,
  }, .2)
  scrollTimeline.to('.hero__header', {
    opacity: 0,
    marginTop: -100,
  }, .2)
})
</script>
<template>
  <section class="hero">
    <div class="hero__background">
      <video autoplay muted loop src="~/assets/jungle.mp4"></video>
    </div>
    <Header class="hero__header" :isFrontpage="true" />
    <div class="hero__container">
      <div class="hero__top">
        <div class="hero__side-logo">
          <hr class="hero__line-1" />
          <Icon class="hero__icon" :color="colors.halfSpanishWhite" />
        </div>
      </div>
      <div class="hero__bottom">
        <div class="hero__tagline">
          <ul class="hero__tagline-list">
            <li>Botanical</li>
            <li>Impossible</li>
            <li>Sourcing</li>
          </ul>
          <hr class="hero__line-6" />
        </div>
        <div class="hero__logo">
          <Logo class="hero__logo-svg" :color="colors.mikadoYellow" />
        </div>
        <hr class="hero__line-4" />
        <hr class="hero__line-5" />
      </div>
      <hr class="hero__line-3" />
      <hr class="hero__line-2" />
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  position: relative;
  height: 100vh;
  min-height: 800px;
  display: flex;
  flex-direction: column;
}

.hero__header {
  width: 100%;
}

.hero__container {
  max-width: 1296px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  height: 100%;
  flex: 1 1 0;
}

.hero__background {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: -1;
  filter: brightness(.5);

  & video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.hero__tagline {
  font-family: "Sofia Pro";
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 56.78px;
  color: var(--half-spanish-white)
}

.hero__top {
  display: flex;
  justify-content: flex-end;
  height: 100%;
}

.hero__bottom {
  display: flex;
  margin-bottom: 32px;
  position: relative;
}

.hero__side-logo {
  position: relative;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
}

.hero__container {
  display: flex;
  flex-direction: column;
}

.hero__tagline {
  padding: 12px;
  position: relative;
}

.hero__logo {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
}

.hero__logo-svg {
  max-width: 794px;
}


.hero__line-1 {
  position: absolute;
  left: 0;
  height: 100%;
  width: 2px;
  top: 0;
  background: var(--half-spanish-white);
  border: none;
}

.hero__line-2 {
  position: absolute;
  right: 0;
  height: 100%;
  width: 2px;
  top: 0;
  background: var(--half-spanish-white);
  border: none;
}

.hero__line-3 {
  position: absolute;
  left: 0;
  height: 100%;
  width: 2px;
  top: 0;
  background: var(--half-spanish-white);
  border: none;
}

.hero__line-4 {
  position: absolute;
  left: 0;
  height: 2px;
  width: 100%;
  top: 0;
  background: var(--half-spanish-white);
  border: none;
}

.hero__line-5 {
  position: absolute;
  left: 0;
  height: 2px;
  width: 100%;
  bottom: 0;
  background: var(--half-spanish-white);
  border: none;
}

.hero__line-6 {
  position: absolute;
  right: 0;
  height: 100%;
  width: 2px;
  top: 0;
  background: var(--half-spanish-white);
  border: none;
}

@media (max-width: 1328px) {
  .hero__container {
    width: calc(100% - 8px);
  }

  .hero__logo {
    padding: 1rem;
  }
}

@media (max-width: 1000px) {
  .hero {
    min-height: 300px;
  }

  .hero__bottom {
    flex-direction: column;
  }

  .hero__line-6 {
    width: 100%;
    height: 2px;
    bottom: 0;
    top: auto;
  }

  .hero__tagline-list {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
}

@media (max-width: 751px) {
  .hero__tagline-list {
    display: flex;
    gap: 1rem;
    justify-content: center;

    li {
      font-size: 1.5rem;
    }
  }

  .hero__top {
    opacity: 0;
  }
}

@media (max-width: 470px) {
  .hero__tagline-list {
    li {
      font-size: 1rem;
    }
  }
}
</style>