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
          <Icon :color="colors.halfSpanishWhite" />
        </div>
      </div>
      <div class="hero__bottom">
        <div class="hero__tagline">
          Botanical <br />Impossible <br />Sourcing
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: black;
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
  z-index: 0;

  & video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: .4;
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
.hero__logo{
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
}
.hero__logo-svg{
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
</style>