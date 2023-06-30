<script setup>
import Mountain from "~/assets/images/korean-ginseng-moutain.jpeg"
const title = "Ginseng sourcing - Botalys"
useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  ogImage: 'https://botalys.com/share.png',
  twitterImage: 'https://botalys.com/share.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <hero-with-photo :breadcrumb-links="[
    {label:'Korean Ginseng', href:'/botanicals/korean-ginseng/'},
    {label:'Ginseng Sourcing', href:'/botanicals/korean-ginseng/ginseng-sourcing/'}
  ]" :image="Mountain" title="Ginseng sourcing"
        :paragraphs="[
            `With a global market estimated at 80,000 tons per year and a medicinal use spanning over 4 millennia, Korean ginseng is one of the most valuable top selling botanicals in the world, and most of all: a medicinal plant whose history and tradition are deeply intertwined with that of humanity.`]" />
      <botanicals-korean-ginseng-ginseng-sourcing-origin-and-species/>
</template>