<template>
  <div class="footer-description">
    <Logo :color="colors.halfSpanishWhite" class="footer-description__logo"/>
    <p class="footer-description__text text">BOTALYS makes the sourcing of rare medicinal plants both possible & sustainable through biomimetic indoor farming, allowing its customers to harness the full potential of biodiversity - all while preserving it.</p>
  </div>
</template>

<style lang="scss">
.footer-description{
 width: 50%;
 padding:40px;
 border-right: 2px solid var(--half-spanish-white);
 display: flex;
 flex-direction: column;
}
.footer-description__logo{
  max-width: 166px;
}
.footer-description__text {
  color: var(--half-spanish-white);
  margin-top: 40px;
}
@media (max-width: 700px) {
  .footer-description{
    width: 100%;
    border-left: none;
    border-bottom: 2px solid var(--half-spanish-white);
    padding: 40px 1rem;
  }
}
</style>