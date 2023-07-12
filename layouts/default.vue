<template>
  <Header/>
<main>
  <slot />
</main>
<Footer/>
</template>

<script setup lang="ts">
import "../assets/styles/index.css"

const title = "Botalys - Seek wild precision"
const description = "BOTALYS uses an innovativ e Biomimetic Indoor Farming technology to recreate the ideal wild conditions for rare botanicals to grow in. We develop pristine &#38; potent botanical ingredients for the Nutraceutical and Cosmetic industries."

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
</script>