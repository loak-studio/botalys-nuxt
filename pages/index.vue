<template>
  <index-hero />
  <index-discover />
  <index-harness />
  <scroll-tabs :items="[
    {
      title: 'Venture off-trail',
      text: 'Biomimetic Farming Technology is a unique opportunity for you to explore uncharted botanical territories.',
      image: River,
      button: {
        label: 'Discover our Approach',
        href: '#'
      }
    },

    {
      title: 'Upgrade your standards',
      text: 'BOTALYS is committed to providing meticulous brands like yours the uncompromising quality botanicals they deserve.',
      image: testtwo,
      button: {
        label: 'Discover our Standards',
        href: '#'
      }
    },
    {
      title: 'Protect wild biotopes',
      text: 'BOTALYS grows the most pristine botanicals in the world without plundering wild biotopes, ushering in a new era of truly sustainable phytoactive ingredients.',
      image: testasset,
      button: {
        label: 'Discover our Standards',
        href: '#'
      }
    },
  ]" />
  <text-image :imageSrc="River">
    <div>
      <Tag color="yellow">Biomimetic Indoor Farming</Tag>
      <h3 class="h3">We raise the bar for botanicals sourcing</h3>
    </div>
    <p class="text">Thanks to its innovative proprietary technology, BOTALYS is able to produce the most pristine quality botanicals in the world.</p>
    <p class="text">From absolute purity to complete standardization, BOTALYS has taken up the bold challenge of ticking all the boxes of an ideal botanicals supply. So that our clients no longer have to choose between quality, effectiveness and sustainability.</p>
    <Button href="#" color="outline">Contact us</Button>
  </text-image>
  <Footer />
</template>

<script setup lang="ts">
import "../assets/styles/index.css"
import testasset from "~/assets/images/footer-jungle.png"
import testtwo from "~/assets/images/butterfly.png"
import River from "~/assets/images/river.jpg"
definePageMeta({ layout: false })
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