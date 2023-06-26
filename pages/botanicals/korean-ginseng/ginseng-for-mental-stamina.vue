<script setup>
import Brain from "~/assets/images/illustrations/brain.png"
import PreclinicalStudies from "~/components/botanicals/korean-ginseng/ginseng-for-mental-stamina/PreclinicalStudies.vue";
const title = "Ginseng for mental stamina - Botalys"
useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  ogImage: 'https://botalys.com/share.png',
  twitterImage: 'https://botalys.com/share.png',
  twitterCard: 'summary_large_image',
})</script>

<template>
    <hero-overflow :links="[
    {
      label:'Korean Ginseng', href:'#'
    }
  ]"
  :blend-mode-luminosity="true"
  :image="Brain"
  title="Korean Ginseng"
  right="-214px"
  top="44px"
  width="597px"
  height="895px"
  :paragraphs="[
    'Korean ginseng (Panax ginseng C.A. Meyer) is the most emblematic herb of traditional Asian Medicine.',
    'And while its reputation as a tonic, aphrodisiac and elixir of longevity dates back several millennia, the benefits of this ancient panacea remain more relevant than ever in the field of medicinal plants.'
  ]"
  />
  <botanicals-korean-ginseng-ginseng-for-mental-stamina-specifically-developped-to-promote-mental-stamina/>
  <botanicals-korean-ginseng-ginseng-for-mental-stamina-ginseng-proprietary-data/>
  <preclinical-studies/>
  <botanicals-korean-ginseng-ginseng-for-mental-stamina-first-round/>
</template>