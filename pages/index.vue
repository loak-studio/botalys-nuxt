<template>
  <IndexHero/>
  <p>index</p>
</template>

<script setup lang="ts">
import "../assets/styles/index.css"
definePageMeta({layout:false})
const title = "Botalys - Seek wild precision"
const description = "BOTALYS uses an innovative Biomimetic Indoor Farming technology to recreate the ideal wild conditions for rare botanicals to grow in. We develop pristine &#38; potent botanical ingredients for the Nutraceutical and Cosmetic industries."

useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  description: description,
  twitterDescription: description,
  ogDescription: description,
  ogImage: 'https://botalys.com/share.png',
  twitterImage: 'https://botalys.com/share.png',
  twitterCard: 'summary_large_image',
})
useHead({
  link: [
    { rel: "apple-touch-icon", sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: "icon", type: "image/png", sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ],
  meta: [
    { name: 'msapplication-TileColor', content: '#E6E2C9' },
    { name: 'theme-color', content: '#E6E2C9' }
  ]
})
</script> 