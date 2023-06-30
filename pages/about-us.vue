<script setup>
import Mountain from "~/assets/images/korean-ginseng-moutain.jpeg"
const title = "About us - Botalys"
useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  ogImage: 'https://botalys.com/share.png',
  twitterImage: 'https://botalys.com/share.png',
  twitterCard: 'summary_large_image',
})</script>

<template>
  <hero-with-photo :image="Mountain" title="About us"
        :paragraphs="[
            `BOTALYS is an ambitious Belgian company dedicated to producing ultra-pure premium botanicals for health.`,
            `Our team of botanical explorers thrives on cultivating collective intelligence and harvesting daring ideas to put them at the service of human health and well-being.`
            ]" />
</template>