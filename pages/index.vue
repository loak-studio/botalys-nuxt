<template>
  <index-hero/>
  <index-discover/>
  <index-harness/>
  <scroll-tabs :items="[
    {
      title:'Venture off-trail',
      text:'Biomimetic Farming Technology is a unique opportunity for you to explore uncharted botanical territories.',
      image:testasset,
      button:{
        label:'Discover our Approach',
        href:'#'
      }
    },

    {
      title:'Upgrade your standards',
      text:'BOTALYS is committed to providing meticulous brands like yours the uncompromising quality botanicals they deserve.',
      image:testtwo,
      button:{
        label:'Discover our Standards',
        href:'#'
      }
    },
    {
      title:'Protect wild biotopes',
      text:'BOTALYS grows the most pristine botanicals in the world without plundering wild biotopes, ushering in a new era of truly sustainable phytoactive ingredients.',
      image:testtwo,
      button:{
        label:'Discover our Standards',
        href:'#'
      }
    },
  ]"/>
  <Footer/>
</template>

<script setup lang="ts">
import "../assets/styles/index.css"
import testasset from "~/assets/images/bulb.png"
import testtwo from "~/assets/images/butterfly.png"
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