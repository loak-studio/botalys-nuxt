<script setup>
import Brain from "~/assets/images/illustrations/brain.png"
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
  <botanicals-korean-ginseng-ginseng-for-mental-stamina-preclinical-studies-text-and-graphs/>
  <botanicals-korean-ginseng-ginseng-for-mental-stamina-clinical-study/>
  <title-with-double-graphs>
    <template v-slot:title>
      ok
    </template>
    <template v-slot:details>
      The attention score was assessed using the D2-test, and measured the daily difference in error rate at the beginning and end of the day. The results of the control show a clear increase of the error rate after 5 days, due to the accumulated fatigue. On the contrary, in the supplemented group, a significant decrease in the error rate was observed from day 1.
    </template>
    </title-with-double-graphs>
</template>