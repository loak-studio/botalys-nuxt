<template>
  <figure class="footer-image">
    <img src="~/assets/images/footer-jungle.png" alt="">
  </figure>
</template>

<style lang="scss">
.footer-image{
  max-height: 267px;
  border-bottom: 2px solid var(--half-spanish-white);
  overflow: hidden;
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
@media (max-width: 1000px) {
    .footer-image{
      display: none;
    }
}
</style>