<script setup>
import Ginseng from "~/assets/images/ginseng-flower.png"
import Moutain from "~/assets/images/korean-ginseng-moutain.jpeg"
const title = "Korean Ginseng - Botalys"
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
  :image="Ginseng"
  title="Korean Ginseng"
  right="-96px"
  top="71px"
  width="597px"
  height="895px"
  :paragraphs="[
    'Korean ginseng (Panax ginseng C.A. Meyer) is the most emblematic herb of traditional Asian Medicine.',
    'And while its reputation as a tonic, aphrodisiac and elixir of longevity dates back several millennia, the benefits of this ancient panacea remain more relevant than ever in the field of medicinal plants.'
  ]"
  />
  <text-image :imageSrc="Moutain">
    <div>
      <Tag color="yellow">Ginseng supply</Tag>
      <h3 class="h3">A Sourcing Nightmare</h3>
    </div>
    <div>
      <p class="text">In recent years, word of ginseng’s extraordinary health benefits has spread across the globe, leading to an unprecedented explosion in demand.</p>
      <p class="text">But like any highly sought-after and valuable botanical, ginseng’s success comes at the price of serious supply and sustainability issues - making it increasingly challenging for meticulous brands to source high quality ginseng.</p>
    </div>
    <botalys-button href="/botanicals/korean-ginseng/ginseng-sourcing/" color="outline">Delve into the Challenges of Ginseng Sourcing</botalys-button>
  </text-image>
  <BotanicalsKoreanGinsengIndexKoreanginsengStats/>
  <BotanicalsKoreanGinsengIndexGinsengForMentalStamina/>
  <BotanicalsKoreanGinsengIndexGinsengForHealth/>
</template>