<template>
  <div class="address">
    <address class="address__address">
      <p class="text" >BOTALYS S.A.</p>
      <p class="text" >Avenue des Artisans 8 - 6</p>
      <p class="text" >7822 Ghislenghien - Belgium</p>
    </address>
    <a class="text address__link address__phone" href="tel:+32 (0)68 33 18 08">+32 (0)68 33 18 08</a>
    <a  class="text address__link" href="mailto:info@botalys.com">info@botalys.com</a>
    <p class="text address__vat" >TVA : BE0834134177</p>
  </div>
</template>

<style lang="scss">
.address{
  padding:40px;
  color: var(--half-spanish-white)
}
.address__address{
  margin-bottom: 18px;
}
.address__phone{
  border-top: 2px solid var(--half-spanish-white);
  max-width: 240px;
  padding-top: 18px;
  margin-bottom: 8px;
}
.address__vat{
  margin-top: 18px;
  padding-top: 18px;
  max-width: 240px;
  border-top: 2px solid var(--half-spanish-white);
}
.address__link{
  color: var(--half-spanish-white);
  display: block;
}
@media (max-width:700px) {
  .address{
    padding:40px 1rem;
  }
}
</style>