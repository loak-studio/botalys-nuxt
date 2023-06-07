<script setup>
const navLinks = [
  {
    title:'Ressources',
    childs:[
      {
        label:'Our Approach',
        href:'/our-approach/'
      },
      {
        label:'Our Standards',
        href:'/our-standards/'
      },
      {
        label:'Other Botanicals',
        href:'/botanicals/other/'
      },
    ]
  },
  {
    title:'Company',
    childs:[
      {
        label:'About us',
        href:'/about-us/'
      },
      {
        label:'Contact',
        href:'/contact-us/'
      },
      {
        label:'GDPR',
        href:'/gdpr/'
      },
    ]
  },
  {
    title:'Korean Ginseng',
    childs:[
      {
        label:'Ginseng Sourcing',
        href:'/botanicals/korean-ginseng/ginseng-sourcing/'
      },
      {
        label:'Ginseng by BOTALYS',
        href:'/botanicals/korean-ginseng/'
      },
      {
        label:'Ginseng for Mental Stamina',
        href:'/botanicals/korean-ginseng/ginseng-for-mental-stamina/'
      },
    ]
  },
  {
    title:'Social',
    childs:[
      {
        label:'LinkedIn',
        href:'https://www.linkedin.com/company/botalys/',
        target:"_blank"
      },
      {
        label:'YouTube',
        href:'https://youtube.com/@botalys2606',
        target:"_blank"
      },
      {
        label:'Instagram',
        href:'https://www.instagram.com/botalys/',
        target:"_blank"
      },
    ]
  },
]
</script>
<template>
  <footer>
    <div>
      <footer-nav v-for="(nav,index) in navLinks" :key="index" :title="nav.title" :childs="nav.childs"/>
    </div>
  </footer>
</template>