<script setup>
const navLinks = [
  {
    title: 'Ressources',
    childs: [
      {
        label: 'Our Approach',
        href: '/our-approach/'
      },
      {
        label: 'Our Standards',
        href: '/our-standards/'
      },
      {
        label: 'Other Botanicals',
        href: '/botanicals/other/'
      },
    ]
  },
  {
    title: 'Company',
    childs: [
      {
        label: 'About us',
        href: '/about-us/'
      },
      {
        label: 'Contact',
        href: '/contact-us/'
      },
      {
        label: 'GDPR',
        href: '/gdpr/'
      },
    ]
  },
  {
    title: 'Korean Ginseng',
    childs: [
      {
        label: 'Ginseng Sourcing',
        href: '/botanicals/korean-ginseng/ginseng-sourcing/'
      },
      {
        label: 'Ginseng by BOTALYS',
        href: '/botanicals/korean-ginseng/'
      },
      {
        label: 'Ginseng for Mental Stamina',
        href: '/botanicals/korean-ginseng/ginseng-for-mental-stamina/'
      },
    ]
  },
  {
    title: 'Social',
    childs: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/botalys/',
        target: "_blank"
      },
      {
        label: 'YouTube',
        href: 'https://youtube.com/@botalys2606',
        target: "_blank"
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/botalys/',
        target: "_blank"
      },
    ]
  },
]
</script>
<template>
  <footer class="footer">
    <div class="footer__container">
      <hr class="footer__line-1" />
      <hr class="footer__line-2" />
      <div class="footer__column-1">
        <div class="footer__navs">
          <footer-nav v-for="(nav, index) in navLinks" :key="index" :title="nav.title" :childs="nav.childs" />
        </div>
        <div class="footer__description-and-address">
          <footer-description/>
          <footer-address/>
        </div>
      </div>
      <div class="footer__column-2">
        <footer-supported/>
        <footer-disclaimer/>
        <footer-image/>
        <footer-signature/>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: var(--dark-jungle-green);
}

.footer__container {
  max-width: 1296px;
  margin: 0 auto;
  position: relative;
  display: flex;
}
.footer__column-1{
  width: 56%;
  border-right: 2px solid var(--half-spanish-white);
}
.footer__column-2{
  width: 44%;
  display: flex;
  flex-direction: column;
}

.footer__navs {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 20px;
  column-gap: 98px;
  padding: 40px;
  padding-right: 113px;
}
.footer__description-and-address{
  border-top:2px solid var(--half-spanish-white);
  display: flex;
}
.footer__line-1 {
  position: absolute;
  left: 0px;
  width: 2px;
  height: 100%;
  background: var(--half-spanish-white);
  top: 0;
  margin: 0;
}

.footer__line-2 {
  position: absolute;
  right: 0px;
  width: 2px;
  height: 100%;
  background: var(--half-spanish-white);
  top: 0;
  margin: 0;
}
@media (max-width: 1328px) {
  .footer__container{

    width: calc(100% - 8px);
  }
}
@media (max-width: 1000px) {
  .footer__container{
    flex-direction: column;
  }
  .footer__column-1{
    width: 100%;
  }
  .footer__column-2{
    width: 100%;
  }
}
@media (max-width: 700px) {
  .footer__description-and-address{
    flex-direction: column;
  }
  .footer__navs{
    grid-template-columns: repeat(1, minmax(0,1fr));
    padding:40px 1rem;
  }
}
</style>