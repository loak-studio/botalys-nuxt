<script setup>
import Brain from "~/assets/images/illustrations/brain.png"
import GinsengProprietaryData from "~/components/GinsengProprietaryData.vue";
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
  <specifically-developped-to-promote-mental-stamina/>
  <ginseng-proprietary-data/>
  <div style="margin-top: 100px;">

  </div>
</template>